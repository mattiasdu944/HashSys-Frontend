import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

import { DeleteProductModal } from '../DeleteProductModal';
import { ISimpleProduct } from '../..';
import { EyeIcon } from 'hugeicons-react';

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
            <Button onClick={handleNavigate} variant='light' color='primary' isIconOnly startContent={<EyeIcon size={18} />} />
            <DeleteProductModal
                productName={product.name}
                productId={ product.id }
            />
        </div>
    )
}
