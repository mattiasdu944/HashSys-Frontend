import Link from 'next/link';
import { LuClipboardList, LuLayers, LuStore } from 'react-icons/lu';

export const NavBar = () => {

    return (
        <div className="bg-white py-4">
            <div className="container">
                <ul className="flex flex-col md:flex-row gap-[3rem]">
                    <li>
                        <Link className="flex items-center gap-2 hover:text-primary transition-all" href='/inventory/products'>
                            <div className="bg-primary-soft text-gray-500 p-2 rounded-full text-xl">
                                <LuClipboardList />
                            </div>
                            <p className="font-medium text-black">
                                Productos
                                <span className="block text-sm text-gray-500">Gestion de recursos</span>
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link className="flex items-center gap-2 hover:text-primary transition-all" href='/inventory/categories'>
                            <div className="bg-primary-soft text-gray-500 p-2 rounded-full text-xl">
                                <LuLayers />
                            </div>
                            <p className="font-medium text-black">
                                Categorias
                                <span className="block text-sm text-gray-500">Categorias disponibles</span>
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link className="flex items-center gap-2 hover:text-primary transition-all" href='/inventory/warehouses'>
                            <div className="bg-primary-soft text-gray-500 p-2 rounded-full text-xl">
                                <LuStore />
                            </div>
                            <p className="font-medium text-black">
                                Almacenes
                                <span className="block text-sm text-gray-500">Almacenes / Sucursales</span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
