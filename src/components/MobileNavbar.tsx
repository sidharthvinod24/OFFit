"use client";
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { useState } from "react";
import ModeToggle from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Contact,
  FileQuestion,
  HomeIcon,
  Info,
  LogOutIcon,
  MenuIcon,
  ShoppingBag,
  Store,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const MobileNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();
  return (
    <>
      <div className="flex md:hidden items-center space-x-2">
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col items-start">
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <HomeIcon className="w-4 h-4" />
                  <span className=" lg:inline">Home</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <Store className="w-4 h-4" />
                  <span className=" lg:inline">Shop</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <Info className="w-4 h-4" />
                  <span className=" lg:inline">About Us</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <Contact className="w-4 h-4" />
                  <span className=" lg:inline">Contact Us</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <FileQuestion className="w-4 h-4" />
                  <span className="lg:inline">FAQ</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-1"
                asChild
              >
                <Link href="/">
                  <ShoppingBag className="w-4 h-4" />
                  <span className=" lg:inline">Cart</span>
                </Link>
              </Button>

              {isSignedIn ? (
                <>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 justify-start"
                  >
                    <Link href="/profile">
                      <UserIcon className="w-4 h-4" />
                      Profile
                    </Link>
                  </Button>
                  <SignOutButton>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-3 justify-start w-full"
                    >
                      <LogOutIcon className="w-4 h-4" />
                      Logout
                    </Button>
                  </SignOutButton>
                </>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button variant="default" className="w-full">
                      Sign In
                    </Button>
                  </SignInButton>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </>
  );
};

export default MobileNavbar;
