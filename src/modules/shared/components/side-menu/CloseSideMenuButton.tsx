'use client'

import { AiOutlineClose } from "react-icons/ai";
import { useUIStore } from "../..";

export const CloseSideMenuButton = () => {

    const closeSideMenu = useUIStore( state => state.closeSideMenu );

    return (
        <div onClick={closeSideMenu} className='md:hidden mx-auto mt-8 rounded-full p-2 bg-gray-100'>
            <AiOutlineClose/>
        </div>
    )
}
