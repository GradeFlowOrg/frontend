"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Empty from "../_components/Empty";

const Page = () => {
  const { t } = useTranslation();

  return <div className="flex min-h-[60vh] w-full items-center justify-center"><Empty /></div>;
};

export default Page;

