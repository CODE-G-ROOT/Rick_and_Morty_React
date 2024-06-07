import * as f_a_icons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ButtonCreate } from "../Button/Buttons";

const items = ["Inicio", "Libros", "Editores", "Lectores"];

const activeStyle = "text-white";

const item = items.map((item) => {
	return (
		<li
			className='font-Red_Hat font-medium text-white/60 hover:scale-110 hover:text-white transition-transform-colors duration-75'
			key={item}
		>
			<NavLink
				to={`/${item}`}
				className={({ isActive }) => (isActive ? activeStyle : undefined)}
			>
				{item}
			</NavLink>
		</li>
	);
});

// const ButtonCreate = ({text, icon}) => {
// 	return (
// 		<button className='flex gap-4 text-white justify-center items-center text-white-50 bg-white/10 w-1/3 sm:w-1/3 lg:w-1/5 xl:w-2/3 h-10 rounded-xl shadow-lg shadow-cyan-500/50'>
// 			<div className='text-lg'>{text}</div>
// 			<div className='font-extrabold text-md'>
//         {icon}
//       </div>
// 		</button>
// 	);
// };

const Side_bar = () => {
	return (
		<>
			<div className=' md:w-2/3 xl:w-full h-full flex flex-col justify-around items-center'>
				<div className='flex justify-center items-center w-20 h-20 rounded-xl bg-white/20 shadow-lg shadow-cyan-500/50 '>
					<f_a_icons.FaBook className='book_icon w-10 h-12 z-10 fill-white' />
				</div>
				<div>
					<ul className='flex flex-col text-center gap-5 text-lg'>{item}</ul>
				</div>
        <ButtonCreate text={"Create"} icon={<f_a_icons.FaPlus/>}/>
			</div>
		</>
	);
};

export default Side_bar;
