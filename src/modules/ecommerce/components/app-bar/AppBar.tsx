import React from 'react'

import { AppBarCart } from './AppBarCart';
import { AppBarMenu } from './AppBarMenu';
import { Button } from '@nextui-org/react';
import { Menu01Icon } from 'hugeicons-react';

export const AppBar = () => {
    return (
        <nav className='appbar'>
            <div className="appbar__container">
                <div className='flex items-center gap-2'>
                    <Button 
                        isIconOnly
                        radius='full'
                        variant='light'
                        startContent={ <Menu01Icon size={20}/> }
                    />
                    <h1>
                        Gymshark
                    </h1>
                </div>

                <AppBarMenu/>

                <div className='w-full flex justify-end'>
                    <AppBarCart/>
                </div>
            </div>

        </nav>
    )
}
