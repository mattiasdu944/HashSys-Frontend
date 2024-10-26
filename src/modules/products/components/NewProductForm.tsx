'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { ICategory } from '@/modules/categories';
import { IProductType, createProduct } from '..';
import { Button, Input, Radio, RadioGroup, Select, SelectItem, Textarea } from '@nextui-org/react';
import Image from 'next/image';


interface Props {
    categories: ICategory[]
}

export const NewProductForm = ({ categories }: Props) => {

    const inputWrapper = 'border-black/20 border-[1px] shadow-none'

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = undefined;
        files = e.target.files;

        if (files) {
            const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
            setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        setIsLoading(true);

        const { productName, description, code, salePrice, unitPrice, exchange_rate, category_id, images } = e.target as HTMLFormElement;

        const formData = new FormData();

        formData.append('name', productName.value);
        formData.append('description', description.value);
        formData.append('code', code.value);
        formData.append('unitPrice', unitPrice.value);
        formData.append('salePrice', salePrice.value);
        formData.append('exchange_rate', exchange_rate.value);
        formData.append('category_id', category_id.value);

        for (let i = 0; i! < images.files.length; i!++) {
            formData.append('images', images.files[i!]);
        }


        const { message, isError } = await createProduct(formData);

        if (isError) {
            toast.error('Ocurrio un error', {
                description: message,
            });

            setIsLoading(false);

            return;
        }

        toast.success('Producto creado', {
            description: message
        });

        setIsLoading(false);

        router.push('/admin/inventory/products');
    }

    return (
        <section className='mb-8'>
            <form noValidate onSubmit={handleSubmit} className='product__form'>
                <h2 className='mb-4'>Detalles del producto</h2>
                <div className='flex flex-col gap-5 mb-4'>
                    <Input
                        name='productName'
                        isRequired
                        variant='bordered'
                        placeholder='Nombre del producto'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                        label="Nombre:"
                    />


                    <Textarea
                        isRequired
                        name='description'
                        label="Descripcion:"
                        variant='bordered'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                    />

                    <div className='flex gap-4'>
                        {selectedImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Preview ${index}`}
                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                            />
                        ))}
                    </div>


                    <Select
                        variant='bordered'
                        name='category_id'
                        label="Selecciona una categoria"
                        labelPlacement='outside'
                        isRequired
                        placeholder="Selecciona una categoria"
                        className="max-w-xs"
                    >
                        {
                            categories.map((category) => (
                                <SelectItem value={category.id} key={category.id}>
                                    {category.name}
                                </SelectItem>
                            ))
                        }

                    </Select>

                    <div className='relative'>
                        <input
                            type="file"
                            name='images'
                            onChange={handleImageChange}
                            multiple
                            accept='image/png, image/jpg, image/jpeg, image/webp,'
                            className='file:bg-transparent file:text-primary file:cursor-pointer file:border-none file:p-2 rounded'
                        />
                    </div>

                    <Input
                        isRequired
                        name='code'
                        variant='bordered'
                        placeholder='ABC-123'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                        label="Codigo del producto:"
                    />


                    <Input
                        name='unitPrice'
                        isRequired
                        variant='bordered'
                        placeholder='20.00'
                        labelPlacement='outside'
                        type='number'
                        step='0.01'
                        classNames={{ inputWrapper }}
                        label="Precio de compra c/u:"
                    />

                    <Input
                        name='salePrice'
                        isRequired
                        variant='bordered'
                        placeholder='20.00'
                        labelPlacement='outside'
                        type='number'
                        step='0.01'
                        classNames={{ inputWrapper }}
                        label="Precio de venta c/u:"
                    />

                    <RadioGroup
                        label="Tipo de cambio"
                        isRequired
                        name='exchange_rate'
                    >
                        <Radio value="BOB">Bolivianos</Radio>
                        <Radio value="USD">Dolares (Americanos)</Radio>
                    </RadioGroup>


                </div>
                <Button isLoading={isLoading} isDisabled={isLoading} type="submit" className='btn-primary mt-8'>Guardar producto</Button>
            </form>
        </section>
    )
}
