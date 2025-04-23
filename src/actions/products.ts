import {GoogleGenAI} from "@google/genai"


type ImageParam = File


interface productDetail {
  name: string
  category: string
  brand: string
  description: string
  stock: number
  price: number
  confidence: number

}


async function filetoBase64(file:ImageParam):Promise<string> {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    return buffer.toString('base64')

}

export async function processProductImageWithAI(file:ImageParam) {
    try {
        if(!process.env.GEMINI_API_KEY){
            throw new Error('Gemini API key is not configured')
        }

        const genAI = new GoogleGenAI({
            apiKey:process.env.GEMINI_API_KEY
        })


        const base64Image = await filetoBase64(file)

        const prompt =  `
            Analyse this product image and extract the following information for a fictional ecommerce store called TechFit:
                1. Name
                2. Category (Smartphone, TV, Computer, Camera, etc)
                3. Brand (Apple,Samsung,Philips,Microsoft,Lenovo,Sharp,Sony,etc) (Your Best Guess)
                4. Description (A quick detailed information about the products and its specifications)
                5. Stock (Your Best Guess)
                6. Price (Your Best Guess)

            Format your response as a clean JSON Object with these fields:
                {
                    "name":"",
                    "category":"",
                    "brand":"",
                    "description":"",
                    "stock":0,
                    "price":0.0
                    "confidence":0.0
                }
            For confidence, use a value between 0 and 1. 0 means no confidence and 1 means full confidence.
            Do not include any other information in your response. Just the JSON object.
        `.trim();

        const contents = [
            {
                inlineData: {
                    mimeType: file.type,
                    data: base64Image,
                  },
                },
                  {text : prompt},
        ]


        const response = await genAI.models.generateContent({
            model:"gemini-2.0-flash",
            contents:contents
        })

        const result = response?.text ?? ""
        
        
        try{
            const productDetail = JSON.parse(result) as productDetail
            const requiredFields = [
                "name",
                "category",
                "brand",
                "description",
                "stock",
                "price",
                "confidence"    
            ]

            const missingFields = requiredFields.filter(
                (field) => ! (field in productDetail)
            )

            if(missingFields.length > 0 ){
                throw new Error(`AI Response missing required fields: ${missingFields.join(',')}`)
            }

            return{
                success:true,
                data:productDetail
            }
            
        }

        catch(error){
            console.log(`The following error ${error} has been found, The returned GEMINI response is ${response}`)
            return {
                success:false,
                error: error
            }

        }
    } catch (error) {
        throw new Error(`Gemini API Error: ${error}`)
    }
    
}


// 
