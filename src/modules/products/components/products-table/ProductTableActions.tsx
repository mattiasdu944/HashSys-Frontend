import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

import { LuEye } from 'react-icons/lu';
import { DeleteProductModal } from '../DeleteProductModal';
import { ISimpleProduct } from '../..';

interface Props {
    product: ISimpleProduct;
}


export const ProductTableActions = ({ product }: Props) => {



    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/inventory/products/${product.slug}`);
    }



    return (
        <div>
            <Button onClick={handleNavigate} variant='light' color='primary' isIconOnly startContent={<LuEye size={18} />} />
            <DeleteProductModal
                productName={product.name}
                productId={ product.id }
            />
        </div>
    )
}
