import { NavMenu, SideMenu } from "@/modules/shared";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard__layout">
            <SideMenu />
            <main className="h-screen w-full overflow-y-auto">
                <NavMenu />
                {children}
            </main>
        </div>
    );
}