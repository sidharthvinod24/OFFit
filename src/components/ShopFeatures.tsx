import {
  CircleDollarSign,
  CreditCard,
  Headset,
  Rocket,
  Truck,
  TruckIcon,
} from "lucide-react";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ShopFeatures = () => {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text:4xl">
            Our Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the powerful features that make our platform the best
            choice for your business.
          </p>
          <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2 md:grid-cols-4">
            <Card className="flex flex-col items-center text-center">
              <TruckIcon className=" h-8 w-8 text-primary" />
              <CardHeader className="p-0 w-full">
                <CardTitle>Free Shipping</CardTitle>
                <CardDescription>
                  Free Shipping for order above $150
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CircleDollarSign className=" h-8 w-8 text-primary" />
              <CardHeader className="p-0 w-full">
                <CardTitle>Money Gurantee</CardTitle>
                <CardDescription>
                  Within 30 Days for an exchange
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <Headset className=" h-8 w-8 text-primary" />
              <CardHeader className="p-0 w-full">
                <CardTitle>Online Support</CardTitle>
                <CardDescription>24 Hours a day, 7 days a week</CardDescription>
              </CardHeader>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CreditCard className=" h-8 w-8 text-primary" />
              <CardHeader className="p-0 w-full">
                <CardTitle>Flexible Payment</CardTitle>
                <CardDescription>Pay with multiple Cards</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopFeatures;
