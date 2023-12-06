const Background_banner = ({ color, img, children }) => {
    return (
        <>
            <div className={`${color} flex justify-between rounded-3xl`}>
                <div className="px-14 pt-20 pb-40 text-white-50 w-2/3 flex flex-col justify-between">
                    <h1 className="text-5xl leading-tight font-normal">
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


const colors_bg = ["bg-primario", "bg-secundario", "bg-terciario"];
const imgs = [
    "https://fastidious-bookkeeping-services.odoo.com/web_editor/shape/theme_bookstore/s_image_text.svg?c1=o-color-1",
    "../../../public/presaber11.svg"
];

const Banner = () => {
    return (
        <>
            <Background_banner
                color={colors_bg[1]}
                img={imgs[0]}
                className=""
            >
            </Background_banner>
            <Background_banner
                color={colors_bg[2]}
                img={imgs[1]}
                className=""
            >
            </Background_banner>
        </>
    )
};

export default Banner;