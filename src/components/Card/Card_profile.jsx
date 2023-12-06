import { useState, useEffect } from "react";


const Card_profile = ({ url }) => {
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
                    error
                });
            };
        };

        fetchData();
    }, []);

    return (
        <>
            {datos ? (
                <>
                        <div className="w-2/4 h-1/2">
                            <img
                                className="w-[3rem] h-[3rem] object-contain rounded-xl"
                                src={datos.image}
                            />
                        </div>
                        <div className="w-full flex flex-col items-start ml-2">
                            <h2 className="text-xg font-medium">{datos.name}</h2>
                            <span className="opacity-50 text-sm">{datos.created.slice(0, 10)}</span>
                        </div>
                </>
            ) : (
                <div>Cargando ...</div>
            )}
        </>
    )
};
export default Card_profile;