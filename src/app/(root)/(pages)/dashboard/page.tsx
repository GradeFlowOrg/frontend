"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("root.pages.dashboard")}</h1>
    </div>
  );
};

export default Dashboard;

