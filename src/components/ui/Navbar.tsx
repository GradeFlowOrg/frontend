"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Bell } from "lucide-react";

import { useMobile } from "@/hooks/useMobile";
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
    <div className="sticky top-3 z-30 w-full">
      <nav className="rounded-2xl border border-black/10 bg-white px-4 py-3 dark:border-[#3a3a3a] dark:bg-[#1a1a1a]">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-slate-700 dark:text-white">{pageTitle}</h1>

            <Breadcrumb className="mt-1">
              <BreadcrumbList className="text-slate-500 dark:text-slate-300">
                {crumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.href}>
                    {index > 0 ? <BreadcrumbSeparator className="text-slate-400 dark:text-slate-500" /> : null}
                    <BreadcrumbItem>
                      {index === crumbs.length - 1 ? (
                        <BreadcrumbPage className="text-slate-600 dark:text-slate-200">{crumb.label}</BreadcrumbPage>
                      ) : (
                        <Link href={crumb.href} className="text-slate-500 transition hover:text-slate-700 dark:text-slate-300 dark:hover:text-white">
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
            <Link
              href="/notifications"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-[#242424] dark:text-slate-300 dark:hover:bg-[#2f2f2f] dark:hover:text-slate-100"
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
