import { useState, useEffect } from "react";

const Author = ({ url }) => {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                setDatos(data.results)
            } catch (error) {
                throw error
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {datos ? (
                <>
                    {
                        datos.map((element, key) => (
                            <div className="w-full py-2 flex justify-between items-center" key={key}>
                                <div className="w-2/3 flex justify-start">
                                    <div className="w-1/5 h-full flex justify-start items-center">
                                        <img
                                            className="object-cover w-[4rem] h-[4rem] rounded-2xl"
                                            src={element.image}
                                        />
                                    </div>
                                    <div className="w-3/5 flex flex-col justify-center items-start">
                                        <p className="font-medium text-lg">{element.name}</p>
                                        <span className="text-sm opacity-40">{element.origin.name}</span>
                                    </div>
                                </div >

                                <div className="h-full flex justify-end mr-5">
                                    <div className="flex gap-3 items-center">
                                        <div className="flex justify-start items-center">
                                            <span className=" text-base opacity-40">{element.status}</span>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="text-3xl">{element.id}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            ) : (
                <div>Cargando</div>
            )}
        </>
    )
};

export default Author;