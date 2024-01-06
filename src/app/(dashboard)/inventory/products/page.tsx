
import { LuPlus } from "react-icons/lu";
import { TitlePage } from "@/modules/shared";
import { ProductReportCard, ProductsTable, getAllProducts } from "@/modules/inventory";


export default async function ProductsPage() {

    const { meta, products } = await getAllProducts();


    return (
        <>
            <TitlePage
                path="/inventory/products/new"
                iconButton={ <LuPlus/> }
                button="Crear producto"
                title="Productos" subTitle="Gestiona los productos de tu empresa"/>
            <ProductReportCard
                totalProducts={ meta.total }
            />
            <ProductsTable
                products={ products }
            />
        </>
    );
}