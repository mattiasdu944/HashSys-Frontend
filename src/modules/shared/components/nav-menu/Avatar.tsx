'use client'
import { User } from '@nextui-org/user';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { User as IUser } from '@/modules/auth/interfaces/user';
import { Logout01Icon, UserIcon } from 'hugeicons-react';


interface Props {
    user: IUser;
}

export const Avatar = ({ user }: Props) => {
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description={ user.role }
                    name={`${user.name}`}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Sesion iniciada con</p>
                    <p className="font-bold">{ user.email }</p>
                </DropdownItem>
                <DropdownItem startContent={ <UserIcon/> } key="profile">
                    Perfil
                </DropdownItem>
                <DropdownItem startContent={ <Logout01Icon/> } key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>

    )
}
