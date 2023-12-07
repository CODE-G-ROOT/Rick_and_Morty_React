import { useEffect, useState } from "react";

const Recient = ({ url }) => {


    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                setDatos(data.results);

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
                    <>
                        {
                            datos.map((element, key) => (
                                <div className="w-full h-[5rem] flex items-center " key={key}>
                                    <div className="w-3/5 mx-1 my-2">
                                        <span className="text-lg font-medium  " key={key} >{element.name}</span>
                                        <p className="text-lg font-light">
                                            ha comentado tu publicación
                                        </p>
                                    </div>

                                    <div className="w-2/5 flex justify-center">
                                        <div>
                                            {element.created.slice(5, 10)}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
            ) : (
                <p>Cargando datos...</p>
            )}
        </>
    )
};

export default Recient;