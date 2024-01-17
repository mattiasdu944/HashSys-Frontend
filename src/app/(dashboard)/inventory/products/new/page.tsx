import { TitlePage } from "@/modules/shared";
import { NewProductForm, getAllProductTypes, getCategories } from "@/modules/inventory";
// import { getAllProductTypes } from "@/modules/inventory/actions/products/get-product-types";

export default async function NewProductPage() {

    const categoriePromise = getCategories();
    const productTypesPromise = getAllProductTypes();

    const [ categories, productTypes ] = await Promise.all([categoriePromise, productTypesPromise]);

    return (
        <>
            <TitlePage
                title="Nuevo producto"
                subTitle="Agrega un nuevo producto a tu inventario"
            />

            <NewProductForm
                categories={ categories } 
                productTypes={ productTypes }
            />
        </>
    );
}