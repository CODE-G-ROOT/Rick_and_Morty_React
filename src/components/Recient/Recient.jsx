

const Recient = ({ person, action, date }) => {
    return (
        <>
            <div className="w-[15rem] h-[5rem] flex items-center bg-gray-200">
                <div className="w-3/5 mx-1 my-2">
                    <span className="text-lg" >{person}</span>
                    <p className="text-xs">
                        {action}
                    </p>
                </div>

                <div className="w-2/5 flex justify-center">
                    <div>
                        {date}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Recient;