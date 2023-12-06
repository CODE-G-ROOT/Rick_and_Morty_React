const estadisticas = {
    "Libreria": "124",
    "Me gusta": "155k",
    "Lectores": "8k",
    "Opiniones": "163 k"
};

const Block_card_component = ({ data }) => {
    return (
        <>
            {Object.keys(data).map((key) => (
                <div className="rounded-2xl h-[6rem] w-[7rem] flex flex-col gap-3 bg-[fff] shadow-xl p-4 border-solid border-1.5 border-gray-500">
                    <ul className="w-full h-full flex flex-col justify-between items-start">
                        <li key={key} className="opacity-50">{`${key}`}</li>
                        <li key={key} className="font-medium text-2xl">{`${data[key]}`}</li>
                    </ul>
                </div>
            ))}
        </>
    )
};


const Block_Card = () => {
    return (
        <>
            <div className="flex gap-5">
                <Block_card_component data={estadisticas}></Block_card_component>
            </div>
        </>
    )
};




export default Block_Card;