'use client'
import { usePathname } from 'next/navigation';
import '../styles.css'
import Link from 'next/link';

export const NavBar = () => {

    const pathname = usePathname();

    return (
        <div className='navbar'>
            <ul className='navbar__menu'>
                <li className={`navbar__menu--item ${pathname === '/inventory/products' && 'bg-gradient'}`}>
                    <Link href='/inventory/products'>
                        Productos
                    </Link>
                </li>
                <li className={`navbar__menu--item ${pathname === '/inventory/categories' && 'bg-gradient'}`}>

                    <Link href='/inventory/categories'>
                        Categorias
                    </Link>
                </li>
                <li className={`navbar__menu--item ${pathname === '/inventory/brands' && 'bg-gradient'}`}>
                    <Link href='/inventory/products'>
                        Marcas
                    </Link>
                </li>
            </ul>


        </div>
    )
}
