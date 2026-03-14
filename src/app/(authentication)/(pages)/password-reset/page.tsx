"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const PasswordReset = () => {
  const { t } = useTranslation();

  return <div>{t("auth.passwordReset.title")}</div>;
};

export default PasswordReset;

