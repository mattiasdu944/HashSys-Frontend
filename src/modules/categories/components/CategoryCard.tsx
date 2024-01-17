'use client'
import Image from 'next/image'
import NotImage from "@/assets/images/not-image.jpg";

import { ICategory } from '..';

import { ModalCategory } from './ModalCategory';
import { LuMoreVertical } from 'react-icons/lu';
import { useDisclosure, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Card, CardBody, CardFooter } from "@nextui-org/react";

interface Props {
    category: ICategory;
}

export const CategoryCard = ({ category }: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card onPress={onOpen} className='shadow-md p-4' isPressable>
                <CardBody className="overflow-visible p-0">
                    <Image
                        width="200"
                        height="200"
                        alt={category.name}
                        className="w-full object-cover"
                        src={category.image ? category.image! : NotImage}
                    />
                </CardBody>
                <CardFooter className="flex flex-col">
                    <div className='w-full flex items-center justify-between mb-2'>
                        <b className='text-lg line-clamp-1'>{category.name}</b>
                        <CategoryCardOptions/>
                    </div>
                    <p className="text-start line-clamp-3">{category.description}</p>
                </CardFooter>
            </Card>

            <ModalCategory category={category} isOpen={isOpen} onOpenChange={onOpenChange} />

        </>
    )
}


export function CategoryCardOptions() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <div>
                    <LuMoreVertical size={ 22 } />
                </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="edit">Editar</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Eliminar
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}