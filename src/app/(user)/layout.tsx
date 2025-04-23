// app/(user)/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  // ❌ Block admins from customer pages
  if (role === "admin") {
    redirect("/admin");
  }

  return (
    <ClerkProvider>
      <ThemeProvider attribute="class">
        <NavBar />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
