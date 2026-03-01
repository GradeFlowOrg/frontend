import SideBar from "@/components/ui/SideBar";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell-bg min-h-screen md:flex">
      <SideBar />
      <main className="layout-enter relative flex-1 px-3 py-3 pb-24 md:px-4 md:py-4 md:pb-4">
        <div className="pointer-events-none fixed right-4 top-4 z-30 hidden md:block">
          <div className="pointer-events-auto rounded-full border border-black/10 bg-white/80 p-1 backdrop-blur dark:border-white/15 dark:bg-[#0f172a]/80">
            <ThemeSwitch />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
