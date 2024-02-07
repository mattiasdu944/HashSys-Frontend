'use client'
import Image from 'next/image';
import { ISimpleProduct } from '../..';
import NotImage from "@/assets/images/not-image.jpg";

import { ProductTableActions } from './ProductTableActions';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'

interface Props {
    products: ISimpleProduct[];
}

export const ProductsTable = ({ products }: Props) => {
    return (
        <section className='container'>
            <Table
                className='shadow-none'
                aria-label="Table for all products"
                classNames={{
                    th: ['bg-primary-soft'],
                    wrapper: 'shadow-sm',
                }}
                checkboxesProps={{
                    classNames: {
                        wrapper: "shadow-none after:bg-black after:text-background text-background",
                    },
                }}
            >
                <TableHeader>
                    <TableColumn className='font-semibold text-sm'>Codigo</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Imagen</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Nombre</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Categoria</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Precio</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        products.map(product => (
                            <TableRow key={ product.id }>
                                <TableCell># { product.code }</TableCell>
                                <TableCell>
                                    {
                                        product.images.length > 0
                                        ? (
                                            <Image
                                                alt={ product.name }
                                                width={ 100 }
                                                height={ 100 }
                                                className='max-w-[50px]'
                                                src={ product.images[0].image }
                                            />
                                        )
                                        : (
                                            <Image
                                                alt={ product.name }
                                                loading='lazy'
                                                width={ 40 }
                                                height={ 40 }
                                                src={ NotImage }
                                            />
                                        )
                                    }
                                </TableCell>
                                <TableCell>{ product.name }</TableCell>
                                <TableCell>{ product.category.name }</TableCell>
                                <TableCell>{ product.price }</TableCell>
                                <TableCell>
                                    <ProductTableActions
                                        product={ product }
                                    />
                                </TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </Table>
        </section>

    )
}
