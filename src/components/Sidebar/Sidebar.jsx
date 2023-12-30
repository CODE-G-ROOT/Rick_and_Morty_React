import * as f_a_icons from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const items = [
    "Inicio",
    "Libros",
    "Editores",
    "Lectores"
];

const activeStyle = 'text-[#fff]'

const item = items.map((item) => {
    return (
        <li
            className='font-Red_Hat font-medium text-whiteTransparent '
            key={item}
        >
            <NavLink
                to={`/${item}`}
                className={({ isActive }) => isActive ? activeStyle : undefined}
            >
                {item}
            </NavLink>
        </li>
    )
});

const Side_bar = () => {

    return (
        <>
            <div className=" w-2/12 h-full flex flex-col justify-around items-center">
                <div className='flex justify-center items-center w-20 h-20 rounded-lg bg-primario_transparet shadow-lg shadow-cyan-500/50 '>
                    <f_a_icons.FaBook className='book_icon  w-10 h-12 z-10' />
                </div>
                <div className="">
                    <ul className='flex flex-col text-center gap-5 text-lg'>
                        {item}
                    </ul>
                </div>
                <button className='flex gap-4 justify-center items-center text-white-50 bg-primario_transparet w-2/5 h-11 rounded-lg shadow-lg shadow-cyan-500/50'>
                    <div className='text-lg'> Crear </div>
                    <div className='font-extrabold text-xl'>+</div>
                </button>

            </div>
        </>
    )
};

export default Side_bar;