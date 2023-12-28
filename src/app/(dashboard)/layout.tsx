import { useSession, validateToken } from "@/modules/auth";
import { NavMenu, SideMenu } from "@/modules/shared";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const { user } = await useSession();
    const validate = await validateToken();

    if( !validate ){
        redirect('/auth/login');
    }
    

    return (
        <div className="dashboard__layout">
            <SideMenu />
            <main className="h-screen w-full overflow-y-auto">
                <NavMenu user={user}/>
                {children}
            </main>
        </div>
    );
}