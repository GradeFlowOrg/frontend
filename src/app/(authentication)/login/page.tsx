"use client";

import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import React, { startTransition, useActionState } from "react";
import { useTranslation } from "react-i18next";
import { loginSchema, LoginFormField } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { login, type LoginActionState } from "../lib/actions";

export default function LoginPage() {
  const { t } = useTranslation();
  const [state, loginAction, isActionPending] = useActionState<LoginActionState, FormData>(
    login,
    { error: null, success: false }
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormField>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "abdulazizyusupaliev009@gmail.com",
      password: "123456",
    },
  });

  React.useEffect(() => {
    if (state.error) {
      setError("root", { message: state.error });
    } else if (state.success) {
      clearErrors("root");
    }
  }, [state, setError, clearErrors]);

  const onSubmit: SubmitHandler<LoginFormField> = async (data) => {
    clearErrors("root");
    const formData = new FormData();
    formData.set("identifier", data.identifier);
    formData.set("password", data.password);
    startTransition(() => {
      loginAction(formData);
    });
  };

  return (
    <section className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111827]/80">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0046FF] dark:text-[#8fb0ff]">
            {t("auth.login.access")}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0F2854] dark:text-white">
            {t("auth.login.title")}
          </h2>
          <p className="mt-2 text-sm text-[#355181] dark:text-slate-300">{t("auth.login.subtitle")}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">{t("auth.login.loginLabel")}</label>
            <Input
              {...register("identifier")}
              type="text"
              placeholder={t("auth.login.loginPlaceholder")}
              className={`w-full ${errors.identifier ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
            />
            {errors.identifier && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="mb-1 block text-sm font-medium text-[#0F2854] dark:text-white">{t("auth.login.passwordLabel")}</label>
              <Link href={'/password-reset'} className="block text-sm text-[#0046FF] hover:underline dark:text-[#8fb0ff]">{t("auth.login.forgot")}</Link>
            </div>
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder={t("auth.login.passwordPlaceholder")}
                className={`w-full pr-11 ${errors.password ? "border-red-500 focus:border-red-500 dark:border-red-400" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-1 right-1 inline-flex w-8 cursor-pointer items-center justify-center rounded-md text-[#355181] transition hover:bg-slate-100 hover:text-[#0046FF] focus-visible:outline-none dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label={showPassword ? t("auth.login.hidePassword") : t("auth.login.showPassword")}
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
            {state.success && (
              <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                {t("auth.login.success")}
              </p>
            )}
          </div>


          <Button
            type="submit"
            className="w-full flex items-center justify-center"
            disabled={isSubmitting || isActionPending}
          >
            {isSubmitting || isActionPending ? <LoaderCircle className="h-5 w-5 animate-spin" /> : t("auth.login.submit")}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-[#355181] dark:text-slate-300">
          {t("auth.login.noAccount")}{" "}
          <Link href="/signup" className="font-semibold text-[#0046FF]">
            {t("auth.login.signup")}
          </Link>
        </p>
      </div>
    </section>
  );
}

