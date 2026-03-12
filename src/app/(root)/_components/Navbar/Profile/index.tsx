import Link from "next/link";
import React from "react";
import { UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <Link
      href="/profile"
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-2 py-1.5 text-slate-700 transition hover:bg-slate-100 md:h-10 md:px-3 dark:border-white/10 dark:bg-[#242424] dark:text-slate-200 dark:hover:bg-[#2f2f2f] dark:hover:text-slate-100"
      aria-label={t("root.pages.profile")}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0046FF] text-white">
        <UserRound className="h-4 w-4" />
      </span>
      <span className="hidden text-sm font-semibold md:inline">{t("root.pages.profile")}</span>
    </Link>
  );
};

export default Profile;
