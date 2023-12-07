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
                <div className="rounded-2xl h-[7rem] w-[8rem] flex flex-col gap-3 p-4 border-solid border-1.5 bg-gray/5 shadow-lg justify-around">
                    <ul className="w-full h-full flex flex-col justify-between items-start">
                        <li key={key} className="opacity-50 text-xl">{`${key}`}</li>
                        <li key={key+1} className="font-medium text-3xl">{`${data[key]}`}</li>
                    </ul>
                </div>
            ))}
        </>
    )
};


const Block_Card = () => {
    return (
        <>
            <div className="flex gap-10">
                <Block_card_component data={estadisticas}></Block_card_component>
            </div>
        </>
    )
};




export default Block_Card;