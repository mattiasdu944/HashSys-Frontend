
import { TitlePage } from "@/modules/shared"
import { CategoryList, NewCategoryModal, getCategories } from "@/modules/categories";


export default async function CategoriesPage() {

    const categories = await getCategories();

    return (
        <>
            <TitlePage title="Categorias" subTitle="Gestiona las categorias para tus productos" component={ <NewCategoryModal/> }/>
            <CategoryList categories={categories}/>
        </>
    );
}