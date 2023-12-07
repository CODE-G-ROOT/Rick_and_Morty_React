import * as f_a_icons from 'react-icons/fa'
import { MdOutlineMailOutline } from "react-icons/md";
import IconoPersonalizado from './icons';

import Search_bar from './search_bar';
import Profile from './profile';

const Icons = () => {
    return (
        <div className="flex gap-5 justify-end h-full w-full items-center">
            <IconoPersonalizado colorFondo="bg-secundario" icono={<f_a_icons.FaRegBell />} colorTexto="text-secundario" />
            <IconoPersonalizado colorFondo="bg-primario" icono={<MdOutlineMailOutline />} colorTexto="text-primario" />
        </div>
    );
};

const NavBar = () => {
    return (
        <>
            <div className='flex w-full h-50 justify-between p-1'>
                <div className='w-2/5 flex items-center'>
                    <Search_bar/>
                </div>
                <div className=' flex w-2/5 justify-end items-center'>
                    <Icons ></Icons>
                    <Profile url="https://rickandmortyapi.com/api/character/1" ></Profile>
                </div>
            </div>
        </>
    );
};  

export default NavBar;