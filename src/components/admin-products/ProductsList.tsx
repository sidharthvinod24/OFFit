"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const ProductsList = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Button onClick={() => router.push("/admin/products/create")}>
            <Plus />
            Add Products
          </Button>

          <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search Products"
                className="pl-9 w-full sm:w-60"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
