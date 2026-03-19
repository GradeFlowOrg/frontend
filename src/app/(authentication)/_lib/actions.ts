"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./session";
import { loginSchema } from "@/app/(authentication)/_types/_schemas";
import { testUsers } from '@/app/(authentication)/_constants/index'
 
export type LoginActionState = {
  error: string | null;
  success: boolean;
  redirectTo?: string;
};

export async function login(
  prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const parsed = loginSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Invalid username/email or password.", success: false };
  }

  const { identifier, password } = parsed.data;

  const matchedUser = testUsers.find(user => user.identifier === identifier);
  if (!matchedUser) {
    return { error: "Invalid username/email or password.", success: false };
  }

  if(matchedUser.password !== password){
    return { error: "Invalid username/email or password.", success: false };
  }

  await createSession(matchedUser.id);
  return { error: null, success: true, redirectTo: "/dashboard" };
}

export async function logout() {
  await deleteSession();
  redirect("/login?logout=1");
}
