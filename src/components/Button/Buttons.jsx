export const Button = () => {
	return (
		<>
			<button className='w-[6rem] h-10 bg-lima_green/20 rounded-3xl flex justify-center items-center text-lima_green font-medium hover:scale-105 hover:bg-lima_green/80 hover:text-white transition-all ease-linear duration-75'>
				Ver Todo
			</button>
		</>
	);
};

export const ButtonBanner = ({ text }) => {
	return (
		<button className='w-5/12 h-auto bg-gray_black flex justify-center gap-5 px-3 py-1 rounded-xl items-center hover:scale-105 transition-all ease-linear duration-75'>
			<p>{text}</p>
			<span className='font-extrabold text-3xl'>+</span>
		</button>
	);
};

export const ButtonCreate = ({ text, icon }) => {
	return (
		<button className='flex gap-4 text-white justify-center items-center text-white-50 bg-white/10 w-1/3 sm:w-1/3 lg:w-1/5 xl:w-2/3 h-10 rounded-xl shadow-lg shadow-cyan-500/50 hover:scale-105 transition-all ease-linear duration-75'>
			<div className='text-lg'>{text}</div>
			<div className='font-extrabold text-md'>{icon}</div>
		</button>
	);
};
