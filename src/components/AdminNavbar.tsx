import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/userActions";

const AdminNavbar = async () => {
  const user = await currentUser();

  if (user) await syncUser();
  return (
    <div className=" sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">TechFit Admin</Link>
          </div>
          <div className="flex items-center space-x-3">
            <UserButton />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
