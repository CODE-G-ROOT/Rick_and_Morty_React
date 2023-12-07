const Banner = ({ color, img, children }) => {
    return (
        <>
            <div className={`${color} flex justify-between rounded-3xl`}>
                <div className="px-14 pt-10 pb-8 text-white-50 w-2/3 flex flex-col justify-between">
                    <h1 className="text-3xl leading-tight font-normal">
                        Andrés nos gusta tu contenido y nos gustaría darte los siguientes tips
                    </h1>
                    <div className="py-5 ">
                        {children}
                    </div>

                </div>
                <div className="w-1/3 h-100">
                    <img
                        className="object-contain"
                        src={img}
                    />
                </div>
            </div>
        </>
    )
};





// esto de debe poner en el App, 

export default Banner;