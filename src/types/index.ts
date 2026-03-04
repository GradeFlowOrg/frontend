import { type LucideIcon } from "lucide-react";

export type SessionPayload = {
    userId: string;
    expiresAt: Date;
}

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type LanguageSwitcherProps = {
  compact?: boolean;
};