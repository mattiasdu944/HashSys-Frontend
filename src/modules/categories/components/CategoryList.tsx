
import { ICategory } from '..';
import { CategoryCard } from './CategoryCard';

interface Props {
    categories: ICategory[];
}

export const CategoryList = ({ categories }: Props) => {

    return (
        <section>
            <ul className='container'>
                <li className="category__list">
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
