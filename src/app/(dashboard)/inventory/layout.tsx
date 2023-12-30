import { NavBar } from "@/modules/inventory";

export default function InventoryLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar/>
            { children }
        </>
    );
}