'use client'

import Image from 'next/image'
import NotImage from "@/assets/images/not-image.jpg";

import { formatDate } from '@/utils';
import { ICategory, ModalCategory, EditCategoryModal, DeleteCategoryModal } from '..'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'



interface Props {
    categories: ICategory[];
}

export const CategoryTable = ({ categories }: Props) => {


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
                    <TableColumn className='font-semibold text-sm'>ID</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Imagen</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Nombre</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Creado</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Ultima actualización</TableColumn>
                    <TableColumn className='font-semibold text-sm'>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>#{category.id}</TableCell>
                                <TableCell>
                                    {
                                        category.image
                                            ? (
                                                <Image
                                                    alt={category.name}
                                                    width={50}
                                                    height={50}
                                                    src={category.image}
                                                />
                                            )
                                            : (
                                                <Image
                                                    alt={category.name}
                                                    loading='lazy'
                                                    width={40}
                                                    height={40}
                                                    src={NotImage}
                                                />
                                            )
                                    }
                                </TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{formatDate(category.createdAt)}</TableCell>
                                <TableCell>{formatDate(category.updatedAt)}</TableCell>
                                <TableCell className='flex'>
                                    <ModalCategory category={category} />
                                    <EditCategoryModal category={category} />
                                    <DeleteCategoryModal categoryId={ category.id } categoryName={ category.name } />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}
