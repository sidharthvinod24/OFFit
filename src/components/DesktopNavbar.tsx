import React from "react";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";

import {
  Contact,
  FileQuestion,
  HomeIcon,
  Info,
  ShoppingBag,
  Store,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const DesktopNavbar = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  return (
    <>
      <div className="hidden md:flex items-center space-x-3">
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Home</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <Store className="w-4 h-4" />
            <span className="hidden lg:inline">Shop</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <Info className="w-4 h-4" />
            <span className="hidden lg:inline">About Us</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <Contact className="w-4 h-4" />
            <span className="hidden lg:inline">Contact Us</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <FileQuestion className="w-4 h-4" />
            <span className="hidden lg:inline">FAQ</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-1" asChild>
          <Link href="/">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden lg:inline">Cart</span>
          </Link>
        </Button>

        {user ? (
          <>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link
                href={`/profile/${
                  user?.username ??
                  user?.emailAddresses[0].emailAddress.split("@")[0]
                }`}
              >
                <UserIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Profile</span>
              </Link>
            </Button>
            <UserButton />
          </>
        ) : (
          <>
            <SignInButton forceRedirectUrl={"/redirect"} mode="modal">
              <Button variant={"default"}>Sign In</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </>
  );
};

export default DesktopNavbar;
