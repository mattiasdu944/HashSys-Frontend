import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";
import { validateToken } from "@/modules/auth";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    
    const validate = await validateToken();
    
    if( validate ){
        redirect('/admin')
    }
    
    return (
        <main className="bg-auth md:bg-white md:bg-none grid md:grid-cols-2 lg:grid-cols-5 min-h-screen">
            <section className="max-w-lg lg:col-span-2 mx-auto flex flex-col justify-center">
                {children}
            </section>

            <section className="hidden lg:col-span-3 bg-auth md:flex flex-col justify-center">
                <div className="container">
                    <h1 className={`${ titleFont.className } text-white md:text-4xl lg:text-[4rem] mb-4`}>Control de inventario</h1>
                    <p className="text-slate-300">Ten control de tu empresa y genera reportes con este sistema para que te ayude a gestionar tu inventario, ventas y clientes</p>
                </div>
            </section>
        </main>
    );
}