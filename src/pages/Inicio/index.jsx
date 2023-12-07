import NavBar from "../../components/Nav_bar/Nav_bar";
import Side_bar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Card_profile from "../../components/Card/Card_profile";
import Banner from "../../components/Banner/Banner";
import Block_Card from "../../components/Card/Bloque_Card";
import Author from "../../components/Author/Author";
import Recient from "../../components/Recient/Recient";

import TheLast from "../../components/TheLast";

const location = "https://rickandmortyapi.com/api/location/1";
const personaje = "https://rickandmortyapi.com/api/character/1";
const personaje2 = "https://rickandmortyapi.com/api/character/2";
const personaje3 = "https://rickandmortyapi.com/api/character/3";


//* esta variable se hizo con el objeto de "simular" el consumo de la api, 
//* dado que la consumida no contiene imagenes para las ubicaciones

const image = "https://get.wallhere.com/photo/illustration-planet-space-Earth-cartoon-atmosphere-Rick-and-Morty-universe-astronomy-Adult-Swim-screenshot-atmosphere-of-earth-outer-space-astronomical-object-105144.png";

const imgs_banner = [
    "https://fastidious-bookkeeping-services.odoo.com/web_editor/shape/theme_bookstore/s_image_text.svg?c1=o-color-1",
    "../../../public/presaber11.svg"
];

const Home = () => {
    return (
        <>
            <div className="bg-primario w-screen h-screen flex justify-between">
                <Side_bar />

                <div className="w-5/6 h-full bg-[#fff] rounded-l-3xl">
                    <div className="w-full h-full z-50 bg-[#fff] rounded-l-3xl flex flex-col items-end">

                        <NavBar url={personaje}></NavBar>

                        <div className="w-full h-full flex">
                            <div className="w-3/4 h-full">
                                <div className="p-5 flex flex-col h-full w-full">
                                    <div className="h-1/5 w-100">
                                        <Banner color="bg-secundario" img={imgs_banner[0]} >
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <p>Vuelve tus libros tendencia mundial!</p>
                                                    <p>¿Quieres empezar a escribir una vez más?</p>
                                                </div>

                                                <div className="w-4/12 h-auto bg-terciario flex justify-center gap-5 px-3 py-1 rounded-xl items-center">
                                                    <p>Crear Borrador </p>
                                                    <span className="font-extrabold text-3xl">+</span>
                                                </div>
                                            </div>
                                        </Banner>
                                    </div>
                                    {/* <div className="h-3/5 w-100">
                                    </div>
                                    <div className="h-1/5 w-100">
                                        <Banner color="bg-terciario" img={imgs_banner[1]} />
                                    </div> */}
                                </div>

                            </div>
                            <div className="w-1/4 h-full flex flex-col bg-terciario/5 rounded-l-3xl shadow-xl shadow-gray-500/40">
                                <TheLast location={location} personaje={personaje} image={image}></TheLast>
                            </div>
                        </div>
                    </div>



                </div>

                {/* <div className="bg-[#fff] w-3/12 h-[5rem] m-1 divide-white-300 divide-y-1">
                    <Author url={personaje} />
                    <Author url={personaje2} />
                    <Author url={personaje3} />
                </div> */}

                {/* <Recient></Recient> */}
            </div>
        </>
    );
};

export default Home;
