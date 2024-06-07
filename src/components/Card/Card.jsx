import Card_profile from "./Card_profile";
import { useEffect, useState } from "react";

const Card = ({ personaje, location, image }) => {
	const [datos, setDatos] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(location);
				const data = await res.json();
				setDatos(data);
			} catch (error) {
				console.error({
					errorType: 404,
					message: "Error al obtener los datos",
					error,
				});
			}
		};

		fetchData();
	}, []);

	return (
		<>
				<div className='h-full w-full rounded-3xl bg-white shadow-lg shadow-gray-400/60'>
				<div className='h-full w-full rounded-xl'>
					<img className='w-full rounded-xl' src={image} />
				</div>

				<div className='w-full pl-5 py-3 flex flex-col justify-start '>
					<div className='h-1/3 w-full'>
						{datos ? (
							<>
								<h2 className=' text-lg font-medium mb-2 opacity-80'>
									{datos.name}
								</h2>
								<p className='text-sm opacity-50 mb-2'>{datos.dimension}</p>
							</>
						) : (
							<div>Cargando ...</div>
						)}
					</div>
					<div className=' w-2/3 h-1/2 flex py-1'>
						<Card_profile url={personaje}></Card_profile>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
