import { Avatar } from './Avatar';
import { SearchResource } from './SearchResource';


export const NavMenu = () => {
    return (
        <nav className='navmenu'>
            <SearchResource/>
            <Avatar/>
        </nav>
    )
}
