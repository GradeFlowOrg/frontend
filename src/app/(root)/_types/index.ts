export interface notificationItemsInterface {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  unread: boolean;
}

export type ThemeOption = "light" | "dark" | "system";