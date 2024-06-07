import { useEffect, useState } from "react";

import { Button } from "../Button/Buttons";

export const Recient = ({ url }) => {
	const [datos, setDatos] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setDatos(data.results);
			} catch (error) {
				console.error({
					errorType: 404,
					message: "Error al obtener los datos",
					error,
				});
			}
		};

		fetchData();
	}, [url]);

	return (
		<>
			{datos ? (
				datos.map((element, index) => (
					<div className='w-full h-auto flex items-center' key={index}>
						<div className='w-3/5 mx-1 my-2'>
							<span className='max-text-md font-medium'>{element.name}</span>
							<p className='text-md font-light'>ha comentado tu publicación</p>
						</div>

						<div className='w-2/5 flex justify-center'>
							<div>
								{typeof element.created === "string"
									? element.created.slice(5, 10)
									: ""}
							</div>
						</div>
					</div>
				))
			) : (
				<p>Cargando datos...</p>
			)}
		</>
	);
};

export const RecentBlock = ({api}) => {
	return (
		<div className='relative w-full h-full sm:h-2/6 lg:h-full mb-5 px-5 bg-gray-100/50 shadow-lg rounded-3xl'>
			<div className='w-full flex justify-between py-5'>
				<h3 className='text-2xl font-medium'>Reciente</h3>
				<Button></Button>
			</div>
			<div className='absolute w-full sm:h-3/5 lg:h-5/6 divide-gray_black/10 divide-y-1 px-6 left-0 overflow-hidden overflow-y-auto'>
				<Recient url={api} action='comentado' />
			</div>
		</div>
	);
};
