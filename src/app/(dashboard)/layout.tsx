import { useSession, validateToken } from "@/modules/auth";
import { NavMenu, SideMenu } from "@/modules/shared";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const validate = await validateToken();

    if (!validate) {
        redirect('/auth/login');
    }

    const { user } = await useSession();

    return (
        <>
            <div className="dashboard__layout">
                <Toaster position="top-right" richColors closeButton style={{
                    position: 'absolute'
                }} />
                <SideMenu />
                <main className="h-screen w-full overflow-y-auto">
                    <NavMenu user={user} />
                    {children}
                </main>
            </div>
        </>
    );
}