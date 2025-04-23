// app/redirect/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RedirectPage(): Promise<null> {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const role = user.publicMetadata?.role;

  if (role === "admin") {
    redirect("/admin");
  } else {
    redirect("/");
  }

  return null;
}
