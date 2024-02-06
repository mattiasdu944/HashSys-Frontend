'use client'
import { FormEvent, useState } from 'react'
import { loginUser } from '../actions/login'


import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

export const LoginForm = () => {

    const inputWrapper = 'border-black/20 border-[1px] shadow-none'

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState({
        isError: false,
        message: ''
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError({ isError: false, message: '' });
        setIsLoading(true);
        const { email, password } = e.target as HTMLFormElement;
        
        const resp = await loginUser(email.value, password.value);

        if( resp.isError ){
            setHasError({
                isError: true,
                message: resp.message
            })
        }
        
        setIsLoading(false);
    }

    return (
        <>
            {
                hasError.isError && (
                    <p className='text-red-500 mb-2'>{ hasError.message }</p>
                )
            }
            <form onSubmit={handleSubmit} className='grid gap-4'>
                <Input
                    name='email'
                    type='email'
                    label="Correo electrónico"
                    placeholder='correo@example.com'
                    variant='bordered'
                    labelPlacement='outside'
                    size='lg'
                    classNames={{inputWrapper}}
                />

                <Input
                    name='password'
                    label="Contraseña"
                    placeholder='Ingresa tu contraseña'
                    variant='bordered'
                    labelPlacement='outside'
                    type='password'
                    size='lg'
                    classNames={{inputWrapper}}

                />

                <Button isLoading={ isLoading } disabled={ isLoading } type='submit' fullWidth size='lg' className='btn-primary'>Iniciar Sesion</Button>
            </form>
        </>
    )
}
