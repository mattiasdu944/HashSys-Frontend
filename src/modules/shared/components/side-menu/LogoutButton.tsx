'use client'
import { logout } from "@/modules/auth"
import { Button } from "@nextui-org/react"
import { LuLogOut } from "react-icons/lu"



export const LogoutButton = () => {
    
    const handleClick = async () => {
        await logout();
    }

    return (
        <Button onClick={handleClick} fullWidth size='lg' color='danger' radius='lg' variant='light' endContent={<LuLogOut />}>
            Cerrar Sesion
        </Button>
    )
}
