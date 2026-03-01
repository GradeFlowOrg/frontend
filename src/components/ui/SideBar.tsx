"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
// import { logout } from '@/app/(authentication)/lib/actions'
import {
  BookOpenCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  House,
  LogOut,
  Menu,
  NotebookPen,
  Settings,
  Trophy,
  UserRound,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const COLLAPSED_BUTTON_SIZE = "h-11 w-11 min-h-11 min-w-11 shrink-0 aspect-square";
const SIDEBAR_BUTTON_PADDING = "p-2.5";

function NavIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center">
      <Icon className="h-6 w-6 shrink-0" strokeWidth={2} absoluteStrokeWidth />
    </span>
  );
}

function SidebarTooltip({
  label,
  collapsed,
  children,
}: {
  label: string;
  collapsed: boolean;
  children: ReactNode;
}) {
  if (!collapsed) return <>{children}</>;

  return (
    <div className="group/tt relative z-[80] flex w-full justify-center">
      {children}
      <div className="pointer-events-none absolute left-full top-1/2 z-[90] ml-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-800 opacity-0 shadow-sm transition-opacity duration-150 group-hover/tt:opacity-100 group-focus-within/tt:opacity-100 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-100">
        {label}
      </div>
    </div>
  );
}

const topItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/roadmaps", label: "Roadmaps", icon: Waypoints },
  { href: "/competitions", label: "Competitions", icon: Trophy },
  { href: "/vocabulary", label: "Vocabulary", icon: BookOpenCheck },
];

const assessmentItems = [
  { href: "/assessments/placements", label: "Placements", count: 8 },
  { href: "/assessments/level-checks", label: "Level Checks", count: 5 },
  { href: "/assessments/homework", label: "Homework", count: 0 },
  { href: "/assessments/exams", label: "Exams", count: 1 },
  { href: "/assessments/last-dances", label: "Last Dances", count: 8 },
];

const bottomItems: NavItem[] = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/profile", label: "Profile", icon: UserRound },
];

const mobilePrimary: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/roadmaps", label: "Roadmaps", icon: Waypoints },
  { href: "/competitions", label: "Competitions", icon: Trophy },
  { href: "/assessments", label: "Assessments", icon: NotebookPen },
];
const mobileExtra = [...topItems.slice(4), ...bottomItems];

function NavLink({
  item,
  active,
  collapsed,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  return (
    <SidebarTooltip label={item.label} collapsed={collapsed}>
      <Link
        href={item.href}
        onClick={onClick}
        className={`group flex cursor-pointer items-center rounded-2xl border transition-all duration-200 ${
          collapsed
            ? `mx-auto ${COLLAPSED_BUTTON_SIZE} ${SIDEBAR_BUTTON_PADDING} justify-center overflow-visible`
            : `justify-start ${SIDEBAR_BUTTON_PADDING}`
        } ${
          active
            ? "border-[#2d63ff] bg-[#0046FF] text-white"
            : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:text-white/80 dark:hover:border-white/10 dark:hover:bg-white/8 dark:hover:text-white"
        }`}
      >
        <NavIcon icon={Icon} />
        {!collapsed ? (
          <span className="ml-3 truncate text-[15px] font-semibold tracking-tight">{item.label}</span>
        ) : null}
      </Link>
    </SidebarTooltip>
  );
}

function MobileLink({
  item,
  active,
  onPress,
}: {
  item: NavItem;
  active: boolean;
  onPress?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onPress}
      className={`flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 transition ${
        active
          ? "bg-[#0046FF] text-white"
          : "text-[#121212]/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
      }`}
    >
      <NavIcon icon={Icon} />
      <span className="truncate text-[11px] font-semibold">{item.label}</span>
    </Link>
  );
}

export default function SideBar() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("gf-sidebar-collapsed") === "1";
  });
  const [assessmentsOpen, setAssessmentsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const assessmentsActive = pathname.startsWith("/assessments");

  useEffect(() => {
    localStorage.setItem("gf-sidebar-collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  const desktopWidth = useMemo(() => (collapsed ? "w-[96px]" : "w-[300px]"), [collapsed]);

  const handleCollapsedAssessmentsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCollapsed(false);
    setAssessmentsOpen(true);
  };

  if (!mounted) {
    return <aside className="hidden md:flex w-[300px] shrink-0 p-4" aria-hidden />;
  }

  return (
    <>
      <aside className={`hidden md:flex ${desktopWidth} shrink-0 p-4 transition-[width] duration-300`}>
        <div className="relative flex h-[calc(100vh-2rem)] w-full flex-col overflow-visible rounded-[28px] border border-slate-300 bg-gradient-to-b from-white to-slate-100 p-3 text-slate-900 shadow-sm dark:border-[#1e2a49] dark:bg-gradient-to-b dark:from-[#0f1b36] dark:to-[#080d18] dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className={`mb-4 ${collapsed ? "flex justify-center" : "flex items-start justify-between"}`}>
            {!collapsed ? (
              <div className="min-w-0">
                <p className="truncate font-[var(--font-montserrat)] text-2xl font-semibold leading-none">GradeFlow</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-white/55">College Prep Community</p>
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => setCollapsed((prev) => !prev)}
              className={`inline-flex ${COLLAPSED_BUTTON_SIZE} ${SIDEBAR_BUTTON_PADDING} cursor-pointer items-center justify-center rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 transition hover:bg-slate-200 dark:border-white/15 dark:bg-white/6 dark:text-white/85 dark:hover:bg-white/14 dark:hover:text-white`}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <NavIcon icon={ChevronRight} /> : <NavIcon icon={ChevronLeft} />}
            </button>
          </div>

          <div
            className={`flex-1 pr-1 ${
              collapsed ? "overflow-visible" : "sidebar-scroll overflow-y-auto"
            }`}
          >
            <nav className={collapsed ? "mx-auto flex w-full flex-col items-center gap-2" : "space-y-2"}>
              {topItems.slice(0, 3).map((item) => (
                <NavLink key={item.href} item={item} collapsed={collapsed} active={pathname === item.href} />
              ))}

              {collapsed ? (
                <SidebarTooltip label="Assessments" collapsed={collapsed}>
                  <button
                    type="button"
                    onClick={handleCollapsedAssessmentsClick}
                    className={`group flex cursor-pointer items-center justify-center rounded-2xl border transition-all duration-200 ${
                      collapsed
                        ? `mx-auto ${COLLAPSED_BUTTON_SIZE} ${SIDEBAR_BUTTON_PADDING} overflow-visible`
                        : `w-full ${SIDEBAR_BUTTON_PADDING}`
                    } ${
                      assessmentsActive
                        ? "border-[#2d63ff] bg-[#0046FF] text-white"
                        : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:text-white/80 dark:hover:border-white/10 dark:hover:bg-white/8 dark:hover:text-white"
                    }`}
                  >
                    <NavIcon icon={NotebookPen} />
                  </button>
                </SidebarTooltip>
              ) : (
                <div className="rounded-2xl border border-slate-300/80 bg-white/80 dark:border-white/8 dark:bg-white/3">
                  <button
                    type="button"
                    onClick={() => setAssessmentsOpen((prev) => !prev)}
                    className={`flex w-full cursor-pointer items-center rounded-2xl text-left transition ${SIDEBAR_BUTTON_PADDING} ${
                      assessmentsActive
                        ? "bg-slate-100 text-slate-900 dark:bg-white/8 dark:text-white"
                        : "text-slate-700 hover:bg-slate-100 dark:text-white/85 dark:hover:bg-white/6 dark:hover:text-white"
                    }`}
                  >
                    <NotebookPen className="h-5 w-5 shrink-0" />
                    <span className="ml-3 text-[15px] font-semibold tracking-tight">Assessments</span>
                    <span
                      className={`ml-auto transition-transform duration-300 ${
                        assessmentsOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden px-2 transition-[max-height,opacity] duration-300 ease-out ${
                      assessmentsOpen ? "max-h-96 pb-2 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                      {assessmentItems.map((item) => {
                        const subActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex cursor-pointer items-center rounded-xl px-3 py-2 transition ${
                              subActive
                                ? "bg-slate-100 text-[#e11d48] dark:bg-black/20"
                                : "text-slate-700 hover:bg-slate-100 dark:text-white/85 dark:hover:bg-white/6 dark:hover:text-white"
                            }`}
                          >
                            <span className={`mr-3 h-2 w-2 rounded-full ${subActive ? "bg-[#e11d48]" : "bg-slate-500 dark:bg-white/80"}`} />
                            <span className="text-[15px] font-semibold">{item.label}</span>
                            {item.count > 0 ? (
                              <span className="ml-auto text-[28px] leading-none text-[#e11d48]">{item.count}</span>
                            ) : null}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              )}

              {topItems.slice(3).map((item) => (
                <NavLink key={item.href} item={item} collapsed={collapsed} active={pathname === item.href} />
              ))}
            </nav>
          </div>

          <div className={collapsed ? "mt-4 flex flex-col items-center gap-2" : "mt-4 space-y-2"}>
            {bottomItems.map((item) => (
              <NavLink key={item.href} item={item} collapsed={collapsed} active={pathname === item.href} />
            ))}
            <SidebarTooltip label="Log out" collapsed={collapsed}>
              <button
                type="button"
                // onClick={logout}
                className={`flex cursor-pointer items-center rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 transition hover:bg-slate-200 dark:border-white/12 dark:bg-white/7 dark:text-white/85 dark:hover:bg-white/15 dark:hover:text-white ${
                    collapsed
                      ? `mx-auto ${COLLAPSED_BUTTON_SIZE} ${SIDEBAR_BUTTON_PADDING} justify-center overflow-visible`
                      : `w-full justify-start ${SIDEBAR_BUTTON_PADDING}`
                }`}
              >
                  <NavIcon icon={LogOut} />
                  {!collapsed ? <span className="ml-3 text-[15px] font-semibold">Log out</span> : null}
                </button>
            </SidebarTooltip>
          </div>
        </div>
      </aside>

      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <div
          className={`mb-2 overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl transition-[max-height,opacity,transform] duration-300 ease-out dark:border-white/10 dark:bg-[#101216] ${
            mobileExpanded
              ? "pointer-events-auto max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 translate-y-2 opacity-0"
          }`}
        >
            <div className="space-y-1">
              {mobileExtra.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileExpanded(false)}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    pathname === item.href
                      ? "bg-[#0046FF] text-white"
                      : "text-[#121212]/75 hover:bg-black/5 dark:text-white/75 dark:hover:bg-white/10"
                  }`}
                >
                  <NavIcon icon={item.icon} />
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                // onClick={logout}
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-black/10 px-3 py-2.5 text-left text-sm font-semibold text-[#121212]/75 transition hover:bg-black/5 dark:border-white/10 dark:text-white/75 dark:hover:bg-white/10"
              >
                <NavIcon icon={LogOut} />
                Log out
              </button>
            </div>
        </div>

        <nav className="rounded-2xl border border-black/10 bg-white/95 p-2 backdrop-blur dark:border-white/10 dark:bg-[#101216]/95">
          <div className="flex items-stretch gap-1.5">
            {mobilePrimary.map((item) => (
              <MobileLink
                key={item.href}
                item={item}
                active={pathname === item.href}
                onPress={() => setMobileExpanded(false)}
              />
            ))}
            <button
              type="button"
              onClick={() => setMobileExpanded((prev) => !prev)}
              className={`inline-flex w-[62px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold transition ${
                mobileExpanded
                  ? "bg-[#0046FF] text-white"
                  : "text-[#121212]/75 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle more navigation items"
              aria-expanded={mobileExpanded}
            >
              <NavIcon icon={Menu} />
              More
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
