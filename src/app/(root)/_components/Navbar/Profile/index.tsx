'use client'
import Link from "next/link";import { UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";

const Profile = ({ userName }: { userName?: string | null }) => {
  const { t } = useTranslation();

  return (
    <Link
      href="/profile"
      className="inline-flex items-center gap-2 text-slate-700 transition dark:text-slate-300 dark:hover:text-slate-100"
      aria-label={t("root.pages.profile")}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white text-slate-700 transition hover:bg-slate-100 md:h-10 md:w-10 md:rounded-xl dark:border-white/10 dark:bg-[#242424] dark:text-slate-300 dark:hover:bg-[#2f2f2f] dark:hover:text-slate-100">
        <UserRound className="h-4 w-4" />
      </span>
      <span className="hidden text-sm font-semibold md:inline">{userName ?? t("root.pages.profile")}</span>
    </Link>
  );
};

export default Profile;
