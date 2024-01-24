'use client'
import { deleteCategory } from '..'

import { LuMoreVertical } from 'react-icons/lu'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'


interface Props {
    id: string
}

export const CategoryCardOptions = ({ id }: Props) => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <div>
                    <LuMoreVertical size={22} />
                </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="edit">
                    {/* <EditCategoryModal/> */}
                </DropdownItem>
                <DropdownItem onClick={() => deleteCategory( id )} key="delete" className="text-danger" color="danger">
                    Eliminar
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
