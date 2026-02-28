"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Sparkles,
  ChevronRight,
  ChevronsUpDown,
  BadgeCheck,
  Bell,
  CreditCard,
  LogOut,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const data = {
  teams: [
    {
      name: "GradeFlow",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Platform",
      url: "#",
      icon: Bot,
      isActive: true,
      items: [
        { title: "Playground", url: "/dashboard" },
        { title: "History", url: "/dashboard/history" },
        { title: "Starred", url: "/dashboard/starred" },
        { title: "Settings", url: "/dashboard/settings" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: AudioWaveform,
      items: [
        { title: "Genesis", url: "/dashboard/genesis" },
        { title: "Explorer", url: "/dashboard/explorer" },
        { title: "Quantum", url: "/dashboard/quantum" },
      ],
    },
  ],
  projects: [
    { name: "Dashboard", url: "/dashboard", icon: Frame },
    { name: "Analytics", url: "/dashboard/analytics", icon: PieChart },
    { name: "Roadmap", url: "/dashboard/roadmap", icon: Map },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({
    Platform: true,
    Models: false,
  })
  const TeamLogo = data.teams[0].logo

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-[#EAF1FF] data-[state=open]:text-[#0046FF] dark:data-[state=open]:bg-white/10"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#0046FF] text-white">
                    <TeamLogo className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-[#0F2854] dark:text-white">{data.teams[0].name}</span>
                    <span className="truncate text-xs text-[#4A648F] dark:text-slate-400">{data.teams[0].plan}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuLabel className="text-xs text-[#4A648F] dark:text-slate-400">Teams</DropdownMenuLabel>
                <DropdownMenuItem>
                  <div className="flex size-6 items-center justify-center rounded-sm border border-black/10 dark:border-white/10">
                    <Command className="size-4" />
                  </div>
                  Create team
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#4A648F] dark:text-slate-400">Platform</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => {
              const isOpen = openMenus[item.title] ?? !!item.isActive

              return (
                <Collapsible
                  key={item.title}
                  asChild
                  open={isOpen}
                  onOpenChange={(next) =>
                    setOpenMenus((prev) => ({ ...prev, [item.title]: next }))
                  }
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="hover:bg-[#EAF1FF] hover:text-[#0046FF] dark:hover:bg-white/10"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className="hover:bg-[#EAF1FF] hover:text-[#0046FF] dark:hover:bg-white/10"
                            >
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-1">
          <SidebarGroupLabel className="text-[#4A648F] dark:text-slate-400">Projects</SidebarGroupLabel>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.name}
                  className="hover:bg-[#EAF1FF] hover:text-[#0046FF] dark:hover:bg-white/10"
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-[#EAF1FF] data-[state=open]:text-[#0046FF] dark:data-[state=open]:bg-white/10"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#76A5FF] to-[#0046FF] text-white">
                    GF
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-[#0F2854] dark:text-white">GradeFlow Admin</span>
                    <span className="truncate text-xs text-[#4A648F] dark:text-slate-400">admin@gradeflow.app</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#76A5FF] to-[#0046FF] text-white">
                      GF
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">GradeFlow Admin</span>
                      <span className="truncate text-xs text-[#4A648F] dark:text-slate-400">admin@gradeflow.app</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-500/10 dark:focus:text-red-300">
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
