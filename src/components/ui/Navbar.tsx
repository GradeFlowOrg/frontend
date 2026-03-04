"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Bell } from "lucide-react";

import { useMobile } from "@/hooks/useMobile";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PAGE_KEY_MAP: Record<string, string> = {
  dashboard: "root.pages.dashboard",
  classes: "root.pages.classes",
  school: "root.pages.school",
  notifications: "root.pages.notifications",
  profile: "root.pages.profile",
  settings: "root.pages.settings",
  assignments: "sidebar.assignments",
  homework: "root.pages.homework",
  exams: "root.pages.exams",
};

const Navbar = () => {
  const isMobile = useMobile();
  const pathname = usePathname();
  const { t } = useTranslation();

  const crumbs = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [{ href: "/dashboard", label: t("root.pages.dashboard") }];
    }

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const key = PAGE_KEY_MAP[segment];
      return {
        href,
        label: key ? t(key) : segment,
      };
    });
  }, [pathname, t]);

  const pageTitle = crumbs[crumbs.length - 1]?.label ?? t("root.pages.dashboard");

  if (!isMobile) return null;

  return (
    <div className="w-full">
      <nav className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 px-4 py-3 backdrop-blur dark:border-[#3a3a3a] dark:bg-[#1a1a1a]/95">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,70,255,0.15),transparent_40%)]" />

        <div className="relative flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-[#0F2854] dark:text-white">{pageTitle}</h1>

            <Breadcrumb className="mt-1">
              <BreadcrumbList>
                {crumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.href}>
                    {index > 0 ? <BreadcrumbSeparator /> : null}
                    <BreadcrumbItem>
                      {index === crumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      ) : (
                        <Link href={crumb.href} className="text-slate-500 transition hover:text-[#0046FF] dark:text-slate-300 dark:hover:text-white">
                          {crumb.label}
                        </Link>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher compact />
            <Link
              href="/notifications"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white text-[#0F2854] transition hover:bg-[#f4f8ff] dark:border-white/10 dark:bg-[#101623] dark:text-white dark:hover:bg-[#1d2639]"
              aria-label={t("root.pages.notifications")}
            >
              <Bell className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
