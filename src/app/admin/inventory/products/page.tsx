
import { TitlePage } from "@/modules/shared";
import { ProductReportCard, ProductsTable, getAllProducts } from "@/modules/products";
import { Add01Icon } from "hugeicons-react";


export default async function ProductsPage() {

    const { meta, products } = await getAllProducts();


    return (
        <>
            <TitlePage
                path="/inventory/products/new"
                iconButton={<Add01Icon />}
                button="Crear producto"
                title="Productos" subTitle="Gestiona los productos de tu empresa"
            />
            <ProductReportCard
                totalProducts={meta.total}
            />
            <ProductsTable
                products={products}
            />
        </>
    );
}