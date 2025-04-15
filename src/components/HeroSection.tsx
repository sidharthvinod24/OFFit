import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container md:m-10 mb-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold lg:text-6xl">
              Gear Up for the Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                TechFit
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Your destination for everything electronic.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="#">Shop Now</a>
              </Button>
            </div>
          </div>
          <Image
            src={"/landing-page.png"}
            height={400}
            width={400}
            alt="Picture of Electronics"
            className="h-full w-full rounded-md "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
