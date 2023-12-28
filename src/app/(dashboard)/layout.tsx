import { validateToken } from "@/modules/auth";
import { NavMenu, SideMenu } from "@/modules/shared";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const validate = await validateToken();
    
    if( !validate ){
        redirect('/auth/login');
    }
    

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