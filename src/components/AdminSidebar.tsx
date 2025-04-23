import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { LayoutDashboard, ShoppingBasket } from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <>
      <Command className="bg-secondary rounded-none">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className=" h-4 w-4" />
              <Link href="/">Dashboard </Link>
            </CommandItem>
            <CommandItem>
              <ShoppingBasket className=" h-4 w-4" />
              <Link href="/admin/products">Products </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </>
  );
};

export default AdminSidebar;
