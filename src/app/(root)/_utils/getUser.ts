import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "@/app/(authentication)/_lib/session";
import { testUsers } from "@/app/(authentication)/_constants";

export async function getUser() {
  try {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return null;
    }

    return testUsers.find((user) => user.id === String(session.userId)) ?? null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
