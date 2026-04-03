import { LucideIcon } from "lucide-react";

export interface notificationItemsInterface {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  unread: boolean;
}

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type Items = {
  item: string;
  number: number;
}

export type ThemeOption = "light" | "dark" | "system";
