'use client'

import { CiGrid41 } from "react-icons/ci";

export const MenuButton = () => {
    return (
        <div className="md:hidden bg-gray-100 p-2 text-xl rounded-full cursor-pointer active:scale-95 transition-all">
            <CiGrid41 />
        </div>
    )
}
