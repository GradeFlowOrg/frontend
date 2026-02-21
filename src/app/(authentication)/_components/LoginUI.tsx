"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, UserRound } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type AuthMode = "login" | "signup";

type AuthFormUIProps = {
  mode: AuthMode;
};

export default function AuthFormUI({ mode }: AuthFormUIProps) {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const isLogin = mode === "login";

  return (
    <section className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111827]/80">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0046FF] dark:text-[#8fb0ff]">
            GradeFlow Access
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F2854] dark:text-white">
            {"Welcome back"}
          </h2>
          <p className="mt-2 text-sm text-[#355181] dark:text-slate-300">{"Join GradeFlow to create or take tests online."}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Full name</label>
              <Input
                type="text"
                placeholder={role === "teacher" ? "Enter your name" : "Enter your name"}
                className="w-full"
              />
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Confirm password</label>
              <Input  
                type="password"
                placeholder="Re-enter your password"
                className="w-full"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
          >
            {isLogin ? `Login as ${role}` : `Create ${role} account`}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-[#355181] dark:text-slate-300">
          {isLogin ? "No account yet?" : "Already have an account?"}{" "}
          <Link href={isLogin ? "/signup" : "/login"} className="font-semibold text-[#0046FF]">
            {isLogin ? "Sign up" : "Login"}
          </Link>
        </p>
      </div>
    </section>
  );
}
