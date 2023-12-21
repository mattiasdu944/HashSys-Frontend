import { ReactNode } from "react";

import { LuArrowDown, LuArrowUp, LuClipboardList, LuHome, LuPackage, LuUsers, LuUsers2 } from "react-icons/lu";
import { TbArrowDown, TbArrowUp, TbHome, TbPackageImport, TbSettings2, TbUsers } from "react-icons/tb";


interface SideMenuOption {
    name: string;
    path: string;
    icon: ReactNode;
    role: 'Administrador' | 'Empleado';
}

export const sidemenu_options: SideMenuOption[] = [
    {
        name: 'Inicio',
        path: '/home',
        icon: <LuHome size={ 22 }/>,
        role: 'Empleado',
    },
    {
        name: 'Inventario',
        path: '/inventory/products',
        icon: <LuClipboardList  size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Clientes',
        path: '/clients',
        icon: <LuUsers2 size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Ventas',
        path: '/sales',
        icon: <LuArrowDown size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Gastos',
        path: '/expenses',
        icon: <LuArrowUp size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Proveedores',
        path: '/providers',
        icon: <LuPackage size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Configuración',
        path: '/settings',
        icon: <TbSettings2 size={ 22 }/>,
        role: 'Administrador',
    },
]