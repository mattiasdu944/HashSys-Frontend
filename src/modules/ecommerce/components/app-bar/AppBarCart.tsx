import React from 'react'
import { Button } from '@nextui-org/react';
import { ShoppingCart01Icon } from 'hugeicons-react';

export const AppBarCart = () => {
    return (
        <>
            <Button
                variant='light'
                radius='full'
                isIconOnly
                startContent={ <ShoppingCart01Icon size={20}/> }
            />

        </>
    )
}
