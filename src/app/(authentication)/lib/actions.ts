"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./session";
import { loginSchema } from "@/schemas";

const testUser = {
  id: "1",
  identifier: "abdulazizyusupaliev009@gmail.com",
  password: "123456",
};

export type LoginActionState = {
  error: string | null;
  success: boolean;
};

export async function login(
  prevState: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  const parsed = loginSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Invalid username/email or password.", success: false };
  }

  const { identifier, password } = parsed.data;

  if (identifier !== testUser.identifier || password !== testUser.password) {
    return { error: "Invalid username/email or password.", success: false };
  }

  await createSession(testUser.id);
  redirect("/dashboard");
  return { error: null, success: true };
}

export async function logout() {
    await deleteSession()
    redirect('/login')
}
