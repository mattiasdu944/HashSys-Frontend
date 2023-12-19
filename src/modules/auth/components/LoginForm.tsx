
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

export const LoginForm = () => {
    return (
        <form className='grid gap-4'>
            <Input
                label="Correo electrónico"
                placeholder='correo@example.com'
                variant='bordered'
                labelPlacement='outside'
                type='email'
                size='lg'
            />

            <Input
                label="Contraseña"
                placeholder='Ingresa tu contraseña'
                variant='bordered'
                labelPlacement='outside'
                type='password'
                size='lg'
            />

            <Button fullWidth size='lg'  className='btn-primary'>Iniciar Sesion</Button>
        </form>
    )
}
