"use server"

import { prisma } from "@/lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"
import type { User } from "@/generated/prisma"; 



export async function syncUser(): Promise<User | null>{

    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user){
        return null;
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            clerkID: userId
        }
    })

    if(existingUser) return existingUser;

    const dbUser = await prisma.user.create({
        data:{
            clerkID: userId,
            email: user.emailAddresses[0].emailAddress,
            username: user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
            phoneNumber: user.primaryPhoneNumber?.phoneNumber || null,
            image: user.imageUrl,
            role: (user.publicMetadata?.role as string) ?? 'customer'          
        }
    })

    return dbUser;

}