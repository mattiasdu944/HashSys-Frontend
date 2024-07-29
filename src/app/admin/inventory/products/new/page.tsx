
import { TitlePage } from "@/modules/shared";
import { getCategories } from "@/modules/categories";
import { NewProductForm, getAllProductTypes } from "@/modules/products";

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