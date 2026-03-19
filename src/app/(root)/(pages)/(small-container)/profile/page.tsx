import ProfileClient from "./profile.client";
import { getUser } from "@/app/(root)/_utils/getUser";

export default async function Page() {
  const user = await getUser();
  return <ProfileClient key={user?.id ?? "guest"} user={user} />;
}
