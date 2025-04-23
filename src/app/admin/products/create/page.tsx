import CreateProducts from "@/components/admin-products/CreateProducts";
import React from "react";

const AddProductsPage = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6"> Add Products</h1>
        <CreateProducts />
      </div>
    </>
  );
};

export default AddProductsPage;
