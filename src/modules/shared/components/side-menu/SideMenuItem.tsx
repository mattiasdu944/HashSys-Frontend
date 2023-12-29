'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

interface Props {
    path: string;
    children: ReactNode;
    icon: ReactNode;
    role: 'Administrador' | 'Empleado';
}

export const SideMenuItem = ({ children, icon, path }: Props) => {

    const pathname = usePathname();



    return (
        <Link className={`sidemenu__link ${ pathname.split('/').includes(path.split('/')[1]) || pathname === path ? 'sidemenu__link--active' : '' }`} href={path}>
            <span>{ icon }</span>
            <span>
                { children }
            </span>
        </Link>
    )
}
