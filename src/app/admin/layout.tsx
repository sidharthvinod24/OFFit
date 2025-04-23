import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { currentUser } from "@clerk/nextjs/server";
import { ThemeProvider } from "next-themes";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user || user.publicMetadata?.role !== "admin") {
    redirect("/"); // or "/dashboard"
  }

  return (
    <ThemeProvider attribute="class">
      <AdminNavbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <AdminSidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </ThemeProvider>
  );
}
