'use client'
import { ChangeEvent, useState } from 'react';

import { ICategory, IProductType, createProduct } from '../..';

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { Select, SelectItem } from '@nextui-org/select';
import { validateForm } from '@/utils';

interface Props {
    categories: ICategory[]
    productTypes: IProductType[]
}

export const NewProductForm = ({ categories, productTypes }: Props) => {

    const inputWrapper = 'border-black/20 border-[1px] shadow-none'

    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let files = undefined;
        files = e.target.files;

        if (files) {
            const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
            setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
        }
    };

    // const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    //     e.preventDefault();

    //     const formData: Record<string, string> = {};
    //     const formElements = e.target as HTMLFormElement;

    //     // Recopilar datos del formulario
    //     Array.from(formElements.elements).forEach((element) => {
    //         if (element instanceof HTMLInputElement && element.name) {
    //             formData[element.name] = element.value;
    //         }
    //     });

    //     if (!validateForm(formData)) {
    //         console.log('Error: Todos los campos deben ser completados.');
    //         return;
    //     }

    // }


    return (
        <section className='mb-8'>
            <form  noValidate action={createProduct} className='product__form'>
                <h2 className='mb-4'>Detalles del producto</h2>
                <div className='flex flex-col gap-4 mb-8'>
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
                            <img
                                key={index}
                                src={image}
                                alt={`Preview ${index}`}
                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                            />
                        ))}
                    </div>
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
                        name='price'
                        isRequired
                        variant='bordered'
                        placeholder='20.00'
                        labelPlacement='outside'
                        type='number'
                        step='0.01'
                        classNames={{ inputWrapper }}
                        label="Precio:"
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

                <h2 className='mb-6'>Detalles adicionales</h2>
                <div className='flex items-center md:flex-row gap-8'>

                    <RadioGroup
                        isRequired
                        name='product_type_id'
                        label="Tipo de producto"
                    >
                        {
                            productTypes.map((productType) => (
                                <Radio key={productType.id} value={`${productType.id}`}>{productType.name}</Radio>
                            ))
                        }
                    </RadioGroup>

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
                </div>

                <Button type="submit" className='btn-primary mt-8'>Guardar producto</Button>
            </form>
        </section>
    )
}
