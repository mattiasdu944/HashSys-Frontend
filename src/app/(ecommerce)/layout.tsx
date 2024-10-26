import { AppBar } from "@/modules/ecommerce";

export default function EcommerceLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppBar/>
            <main>
                { children }
            </main>
        </>
    );
}