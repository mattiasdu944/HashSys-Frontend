'use client'
import { Input, Textarea } from '@nextui-org/input';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { Select, SelectItem } from '@nextui-org/select';
import { Button } from '@nextui-org/button';
import { ICategory, IProductType } from '../..';

interface Props {
    categories: ICategory[]
    productTypes: IProductType[]
}

export const NewProductForm = ({ categories, productTypes }: Props) => {

    const inputWrapper = 'border-black/20 border-[1px] shadow-none'

    return (
        <section className='mb-8'>
            <form className='product__form'>
                <h2 className='mb-4'>Detalles del producto</h2>
                <div className='flex flex-col gap-4 mb-8'>
                    <Input
                        name='name'
                        variant='bordered'
                        placeholder='Nombre del producto'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                        label="Nombre:"
                    />


                    <Textarea
                        name='description'
                        label="Descripcion:"
                        variant='bordered'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                    />

                    <div className='relative'>
                        <input type="file" className='file:bg-transparent file:text-primary file:cursor-pointer file:border-none file:p-2 rounded' />
                    </div>
                    <Input
                        name='code'
                        variant='bordered'
                        placeholder='ABC-123'
                        labelPlacement='outside'
                        classNames={{ inputWrapper }}
                        label="Codigo del producto:"
                    />


                    <Input
                        name='price'
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
                    >
                        <Radio value="BOB">Bolivianos</Radio>
                        <Radio value="USD">Dolares (Americanos)</Radio>
                    </RadioGroup>
                </div>

                <h2 className='mb-6'>Detalles adicionales</h2>
                <div className='flex items-center md:flex-row gap-8'>

                    <RadioGroup
                        label="Tipo de producto"
                    >
                        {
                            productTypes.map((productType) => (
                                <Radio key={productType.id} value={`${ productType.id }`}>{ productType.name }</Radio>
                            ))
                        }
                    </RadioGroup>

                    <Select
                        variant='bordered'
                        label="Selecciona una categoria"
                        labelPlacement='outside'
                        placeholder="Selecciona una categoria"
                        className="max-w-xs"
                    >
                        {
                            categories.map((category) => (
                                <SelectItem value={ category.id } key={ category.id }>
                                    { category.name }
                                </SelectItem>
                            ))
                        }

                    </Select>
                </div>
                <Button className='btn-primary mt-8'>Guardar producto</Button>

            </form>
        </section>
    )
}
