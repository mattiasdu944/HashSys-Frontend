import { CategoryList, NewCategoryModal, getCategories } from "@/modules/inventory";
import { TitlePage } from "@/modules/shared"


export default async function CategoriesPage() {

    const categories = await getCategories();

    return (
        <>
            <TitlePage title="Categorias" subTitle="Gestiona las categorias para tus productos" component={ <NewCategoryModal/> }/>
            <CategoryList categories={categories}/>
        </>
    );
}