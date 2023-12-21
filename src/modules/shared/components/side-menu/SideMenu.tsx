import { sidemenu_options } from '@/config/constants'
import { titleFont } from '@/config/fonts'
import { SideMenuItem } from './SideMenuItem'
import { LuLogOut, LuStore } from 'react-icons/lu'
import { Button } from '@nextui-org/button';

export const SideMenu = () => {
    return (
        <aside className='sidemenu'>
            <div className='mb-8 flex items-center gap-2'>
                <div className='bg-gradient text-2xl p-2 rounded-xl'>
                    <LuStore/>
                </div>
                <h3 className={`${titleFont.className} font-extrabold text-2xl`}>Inventory</h3>
            </div>
            <ul className='flex flex-col gap-2'>
                {
                    sidemenu_options.map((option, index) => (
                        <li key={index}>
                            <SideMenuItem
                                icon={option.icon}
                                path={option.path}
                                role={option.role}
                            >
                                {option.name}
                            </SideMenuItem>
                        </li>
                    ))
                }
            </ul>
            <div className='flex-1'></div>
            <Button fullWidth size='lg' color='danger' radius='lg' variant='light' endContent={ <LuLogOut/>  }>
                Cerrar Sesion
            </Button>
        </aside>
    )
}
