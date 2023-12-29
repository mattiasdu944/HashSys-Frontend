import { User } from '@/modules/auth/interfaces/user';
import { Avatar } from './Avatar';
import { MenuButton } from './MenuButton';
import { SearchResource } from './SearchResource';

interface Props {
    user: User;
}

export const NavMenu = ({ user }: Props) => {
    
    return (
        <nav className='navmenu'>
            <MenuButton/>
            <SearchResource/>
            <Avatar user={ user }/>
        </nav>
    )
}
