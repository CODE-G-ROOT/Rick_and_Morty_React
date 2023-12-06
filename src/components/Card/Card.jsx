import Card_profile from "./Card_profile";
import { useEffect, useState } from "react";



const Card = ({ personaje, location, img }) => {
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
                    error
                });
            };
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="w-[18rem] h-[20rem] rounded-xl bg-white-50">
                <div className="h-1/2 w-full rounded-xl">
                    {img ? (
                        <img
                        className="object-cover w-full rounded-xl"
                        src={img}
                    />
                    ) : (
                        <div>Cargando ...</div>
                    )}
                </div>

                <div className="h-1/2 w-full px-3 flex flex-col justify-start ">
                    <div className="h-1/2 w-full mt-3 ">
                        {datos ? (
                            <>
                                <h2 className=" text-lg font-medium">{datos.name}</h2>
                                <p className="text-sm opacity-50 ">
                                    {datos.dimension}
                                </p>
                            </>
                        ) : (
                            <div>Cargando ...</div>
                        )}

                    </div>
                    <div className=" w-2/3 h-1/2 flex py-1">
                        <Card_profile url={personaje} ></Card_profile>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;