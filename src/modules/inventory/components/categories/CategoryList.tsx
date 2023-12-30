import { Category } from '../..';
import { CategoryCard } from './CategoryCard';

interface Props {
    categories: Category[];
}

export const CategoryList = ({ categories }: Props) => {

    return (
        <section>
            <ul className='container'>
                <li className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        categories.map( category => (
                            <CategoryCard key={ category.id } category={category} />
                        ))
                    }
                </li>

            </ul>
        </section>

    )
}
