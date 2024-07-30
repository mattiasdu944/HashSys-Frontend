
import { TitlePage } from "@/modules/shared"
import { NewCategoryModal, getCategories } from "@/modules/categories";
import { CategoryTable } from "@/modules/categories/components/CategoryTable";


export default async function CategoriesPage() {

    const categories = await getCategories();

    return (
        <>
            <TitlePage title="Categorias" subTitle="Gestiona las categorias para tus productos" component={ <NewCategoryModal/> }/>
            <CategoryTable categories={categories}/>
        </>
    );
}