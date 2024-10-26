import Link from 'next/link'
import React from 'react'
import { Button } from '@nextui-org/react';
import { Cancel01Icon } from 'hugeicons-react';

export const AppBarMenu = () => {
    return (
        <>
            <ul className='appbar__menu'>
                <li>
                    <Link href='/'>Inicio</Link>
                </li>

                <li>
                    <Link href='/productos'>Productos</Link>
                </li>

                <li>
                    <Link href='/categorias'>Categoria</Link>
                </li>

                <li>
                    <Link href='/contacto'>Contacto</Link>
                </li>

                <Button
                    radius='full'
                    variant='light'
                    isIconOnly
                    startContent={<Cancel01Icon />}
                />
            </ul>

        </>
    )
}
