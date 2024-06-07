import { useState, useEffect } from "react";
import { Button } from "../Button/Buttons";

const Author = ({ url }) => {
	const [datos, setDatos] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				if (!res.ok) {
					throw new Error("Error en la red");
				}
				const data = await res.json();
				setDatos(data.results);
			} catch (err) {
				setError(err.message);
			}
		};

		fetchData();
	}, [url]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!datos) {
		return <div>Cargando...</div>;
	}

	return (
		<>
			{datos.map(({ id, name, origin, image, status }) => (
				<div className='w-full py-2 flex justify-between items-center aspect-auto' key={id}>
					<div className='w-2/3 flex justify-start'>
						<div className='w-1/5 p-2 h-full flex justify-start items-center'>
							<img
								className='object-cover w-auto h-auto rounded-2xl'
								src={image}
								alt={name}
							/>
						</div>
						<div className='w-3/5 flex flex-col justify-center items-start'>
							<p className='font-medium text-lg'>{name}</p>
							<span className='text-sm opacity-40'>{origin.name}</span>
						</div>
					</div>
					<div className='h-full flex justify-end mr-5'>
						<div className='flex gap-3 items-center'>
							<span className='text-base opacity-40'>{status}</span>
							<div className='font-medium text-3xl'>{`${id} k`}</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

const AuthorsBlock = ({api}) => (
	<div className='w-full h-4/5 md:3/4 my-5 '>
		<div className='w-full h-full flex flex-col px-5 pb-3 pt-6 justify-between gap-4 shadow-lg rounded-3xl bg-slate-50'>
			<div className='flex h-1/6 justify-between '>
				<div className='text-3xl font-medium'>Autores</div>
				<Button />
			</div>
			<div className='divide-gray_black/10 divide-y-1 overflow-auto'>
				<Author url={api} />
			</div>
		</div>
	</div>
);

export default AuthorsBlock;
