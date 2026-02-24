"use client";

import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { loginSchema, LoginFormField } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormField>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Invalid credentials");
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Invalid username/email or password.",
      });
    }
  };

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

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Login</label>
            <Input
              {...register("identifier")}
              type="text"
              placeholder="Enter username or email address"
              className={`w-full ${errors.identifier ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400" : ""}`}
            />
            {errors.identifier && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Password</label>
              <Link href={'/password-reset'} className="block text-sm text-[#0046FF] hover:underline dark:text-[#8fb0ff]">Forgot password?</Link>
            </div>
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full pr-10 ${errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#355181] hover:text-[#0046FF] dark:text-slate-300 dark:hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
            {errors.root && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.root.message}
              </p>
            )}
          </div>


          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-[#355181] dark:text-slate-300">
          No account yet?{' '}
          <Link href="/signup" className="font-semibold text-[#0046FF]">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
