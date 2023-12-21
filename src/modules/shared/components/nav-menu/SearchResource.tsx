
import { LuSearch } from 'react-icons/lu';

export const SearchResource = () => {
    return (
        <div className='navmenu__search'>
            <input
                placeholder='Buscar recurso'
                type="text"
            />
            <span className='cursor-pointer'>
                <LuSearch className="text-slate-400" size={20} />
            </span>
        </div>
    )
}
