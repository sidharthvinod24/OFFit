import AdminDashboard from "@/components/AdminDashboard";
import AdminNavbar from "@/components/AdminNavbar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Admin = () => {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default Admin;
