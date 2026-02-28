"use client";

import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import { SignupFormField, signupSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP";


const stepFields: Array<Array<keyof SignupFormField>> = [
  ["role", "fullName", "email"],
  ["verificationCode"],
  ["username", "password", "confirmPassword", "termsAccepted"],
];

export default function SignupPage() {
  const DEMO_VERIFICATION_CODE = "123456";
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormField>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "student",
      fullName: "",
      email: "",
      verificationCode: "",
      username: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const role = watch("role");
  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);

  const nextStep = async () => {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (!valid) return;

    if (step === 1) {
      const code = watch("verificationCode")?.trim();
      if (code !== DEMO_VERIFICATION_CODE) {
        setError("verificationCode", {
          message: "Verification code is incorrect.",
        });
        return;
      }
      clearErrors("verificationCode");
      setValue("verificationCode", "");
    }

    setStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setValue("verificationCode", "");
    clearErrors("verificationCode");
    setStep((prev) => {
      if (prev === 2) return 0;
      return Math.max(prev - 1, 0);
    });
  };

  const onSubmit: SubmitHandler<SignupFormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      throw new Error("Mock signup disabled");
      console.log(data);
    } catch {
      setError("root", {
        message: "Signup UI is ready. Backend connection is not implemented yet.",
      });
    }
  };

  return (
    <section className="w-full px-4">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111827]/80">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0046FF] dark:text-[#8fb0ff]">
            GradeFlow Access
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F2854] dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-[#355181] dark:text-slate-300">
            Multi-step signup for teachers and students. Quick to start, easier to finish.
          </p>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#355181] dark:text-slate-300">
            <span>Step {step + 1} of 3</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full bg-black/5 dark:bg-white/10">
            <div
              className="h-2 rounded-full bg-[#0046FF] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          {step === 0 && (
            <>
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setValue("role", "student", { shouldValidate: true })}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition cursor-pointer ${role === "student"
                      ? "border-[#0046FF] bg-[#e9f1ff] text-[#0046FF] dark:bg-[#1e2f55]"
                      : "border-black/10 text-[#355181] hover:bg-[#f4f8ff] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
                      }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue("role", "teacher", { shouldValidate: true })}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition cursor-pointer ${role === "teacher"
                      ? "border-[#0046FF] bg-[#e9f1ff] text-[#0046FF] dark:bg-[#1e2f55]"
                      : "border-black/10 text-[#355181] hover:bg-[#f4f8ff] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
                      }`}
                  >
                    Teacher
                  </button>
                </div>
                {errors.role && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Full name</label>
                <Input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full ${errors.fullName ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Email</label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full ${errors.email ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">
                  Email verification code
                </label>
                <p className="mb-2 text-xs text-[#355181] dark:text-slate-300">
                  Enter the 6-digit code sent to <span className="font-medium">{watch("email") || "your email"}</span>.
                  Demo code: <span className="font-semibold text-[#0046FF]">{DEMO_VERIFICATION_CODE}</span>
                </p>
                <div className="flex w-full justify-center">
                  <Controller
                    control={control}
                    name="verificationCode"
                    render={({ field }) => (
                      <InputOTP
                        maxLength={6}
                        value={field.value ?? ""}
                        onChange={(value) => {
                          field.onChange(value);
                          if (errors.verificationCode) clearErrors("verificationCode");
                        }}
                        containerClassName="w-full"
                      >
                        <InputOTPGroup className="justify-center">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    )}
                  />
                </div>
                {errors.verificationCode && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.verificationCode.message}</p>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Username</label>
                <Input
                  {...register("username")}
                  type="text"
                  placeholder="@"
                  className={`w-full ${errors.username ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
                />
                {errors.username && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.username.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Password</label>
                <div className="relative">
                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className={`w-full pr-11 ${errors.password ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-1 right-1 inline-flex w-8 cursor-pointer items-center justify-center rounded-md text-[#355181] transition hover:bg-slate-100 hover:text-[#0046FF] focus-visible:outline-none dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">Confirm password</label>
                <div className="relative">
                  <Input
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className={`w-full pr-11 ${errors.confirmPassword ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-1 right-1 inline-flex w-8 cursor-pointer items-center justify-center rounded-md text-[#355181] transition hover:bg-slate-100 hover:text-[#0046FF] focus-visible:outline-none dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
                )}
              </div>

              <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-black/10 p-3 text-sm text-[#355181] dark:border-white/10 dark:text-slate-300">
                <input
                  {...register("termsAccepted")}
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#0046FF]"
                />
                <span>
                  I agree to the Terms and Privacy Policy and understand this is a UI-only demo flow.
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="-mt-2 text-xs text-red-600 dark:text-red-400">{errors.termsAccepted.message}</p>
              )}

              {errors.root && (
                <p className="text-xs text-red-600 dark:text-red-400">{errors.root.message}</p>
              )}
            </>
          )}

          <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-between">
            <Button
              type="button"
              onClick={prevStep}
              disabled={step === 0 ? true : false}
              className={`mt-0 w-full border border-[#c7d8ff] bg-white text-[#0F2854] hover:bg-[#eef4ff] hover:text-[#0046FF] dark:border-white/15 dark:bg-[#0b1220] dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white sm:w-auto sm:min-w-28 `}
            >
              Back
            </Button>


            {step < 2 ? (
              <Button type="button" onClick={nextStep} className="w-full sm:w-auto sm:min-w-32">
                Continue
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto sm:min-w-40">
                {isSubmitting ? "Creating..." : `Create ${role} account`}
              </Button>
            )}
          </div>
        </form>

        {step === 0 && (<p className="mt-5 text-center text-sm text-[#355181] dark:text-slate-300">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#0046FF]">
            Login
          </Link>
        </p>)}
      </div>
    </section>
  );
}
