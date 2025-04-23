import React from "react";
import ProductsList from "@/components/admin-products/ProductsList";

const page = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Product Management</h1>
        <ProductsList />
      </div>
    </>
  );
};

export default page;
