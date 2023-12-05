import { useState, useEffect } from "react";

const Profile = ({url}) => {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                setDatos(data);

            } catch (error) {
                console.error({
                    errorType: 404,
                    message: "Error al obtener los datos",
                    error
                });
            }
        };

        fetchData();
    }), [];

    return (
        <>
            {datos ? (
                <div className="flex gap-5 w-48 mt-5 justify-center items-center">

                    <div className="font-Red_Hat  items-center" >{datos.name}</div>
                    <div className="relative w-16 h-16">
                        <img
                            className="absolute w-full h-full object-cover rounded-lg"
                            src={datos.image}
                        />
                    </div>

                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
        </>
    )
};

export default Profile;