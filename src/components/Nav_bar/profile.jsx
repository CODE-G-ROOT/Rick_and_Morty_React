import { useState, useEffect } from "react";

const Profile = ({ url }) => {
	const [datos, setDatos] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
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
	}),
		[];

	return (
		<>
			{datos ? (
				<div className='flex gap-5 w-full h-full mr-3 justify-end items-center'>
					<div className='font-Red_Hat font-semibold items-center'>
						{datos.name}
					</div>
					<div className='relative w-16 h-16 flex items-center'>
						<img
							className='absolute w-12 h-12  object-cover rounded-lg'
							src={datos.image}
						/>
					</div>
				</div>
			) : (
				<p>Cargando datos...</p>
			)}
		</>
	);
};

export default Profile;
