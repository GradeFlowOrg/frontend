"use client";

import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import React from "react";
import { LoginFormField } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormField>()
  const onSubmit: SubmitHandler<LoginFormField> = (data) => {
    console.log(data)
  }

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

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Username or Email address</label>
            <Input
              {...register("identifier", {
                required: "required",
                minLength: 5,
              })}
              type="text"
              placeholder="Enter username or email address"
              className="w-full"
            />
            {errors.identifier && <span className="mt-1 text-sm text-red-500">{errors.identifier.message}</span>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Password</label>
            <Input
              {...register("password", {
                required: "required",
                minLength: 5,
                maxLength: 20,
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full"
            />
            {errors.password && <span className="mt-1 text-sm text-red-500">{errors.password.message}</span>}
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Login
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
