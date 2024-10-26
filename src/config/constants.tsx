import { ReactNode } from "react";
import { ArrowDown01Icon, ArrowUp01Icon, ClipboardIcon, Home01Icon, PackageIcon, Settings01Icon, UserGroupIcon } from "hugeicons-react";

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
        icon: <Home01Icon size={ 22 }/>,
        role: 'Empleado',
    },
    {
        name: 'Inventario',
        path: '/admin/inventory/products',
        icon: <ClipboardIcon  size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Clientes',
        path: '/clients',
        icon: <UserGroupIcon size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Ventas',
        path: '/sales',
        icon: <ArrowDown01Icon size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Gastos',
        path: '/expenses',
        icon: <ArrowUp01Icon size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Proveedores',
        path: '/providers',
        icon: <PackageIcon size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Configuración',
        path: '/settings',
        icon: <Settings01Icon size={ 22 }/>,
        role: 'Administrador',
    },
]