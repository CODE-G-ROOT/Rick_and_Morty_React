import NavBar from "../../components/Nav_bar/Nav_bar";
import Side_bar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Card_profile from "../../components/Card/Card_profile";
import Banner from "../../components/Banner/Banner";
import Block_Card from "../../components/Card/Bloque_Card";
import Author from "../../components/Author/Author";
import Recient from "../../components/Recient/Recient";
import Button from "../../components/Button/button";

import TheLast from "../../components/TheLast";

const location = "https://rickandmortyapi.com/api/location/1";
const personaje = "https://rickandmortyapi.com/api/character/1";
const personaje2 = "https://rickandmortyapi.com/api/character/2";
const personaje3 = "https://rickandmortyapi.com/api/character/3";
const personaje4 = "https://rickandmortyapi.com/api/character/4";


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
                {/* SIDEBAR */}
                <Side_bar />

                <div className="w-5/6 h-full bg-[#fff] rounded-l-3xl">
                    <div className="w-full h-full z-50 bg-[#fff] rounded-l-3xl flex flex-col items-end">
                        {/* NAVBAR */}
                        <NavBar url={personaje}></NavBar>

                        {/* CUERPO Y PANEL "LO ÚLTIMO"*/}
                        <div className="w-full h-full flex overflow-y-scroll overflow-x-hidden">
                            <div className="w-3/4 h-full flex flex-col">

                                <div className=" p-5 flex flex-col h-full w-full justify-between ">
                                    {/* BANNER */}
                                    <div className="relative h-2/5 w-100">
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

                                    {/* CONTADORES, AUTORES Y RECIENTES */}
                                    <div className="w-full h-3/5 flex py-5">
                                        {/* CONTADORES, AUTORES */}
                                        <div className="h-5/6 w-2/3 px-5 flex flex-col">
                                            {/* CONTADORES */}
                                            <div className="w-full h-auto flex justify-center mb-5">
                                                <Block_Card></Block_Card>
                                            </div>

                                            {/* AUTORES */}
                                            <div className="w-full h-2/12 box-border flex flex-col px-5 pb-3 pt-6 bg-terciario/5 shadow-lg shadow-gray-200/10 rounded-3xl">

                                                <div className="flex justify-between ">
                                                    <div className="text-3xl">Autores</div>
                                                    <div>Button</div>
                                                </div>

                                                <div className="divide-y-2">
                                                    <Author url={personaje2}></Author>
                                                    <Author url={personaje3}></Author>
                                                    <Author url={personaje4}></Author>
                                                </div>

                                            </div>


                                        </div>

                                        {/* RECIENTE */}
                                        <div className="relative h-full w-full px-5 bg-terciario/5 shadow-lg shadow-gray-200/10 rounded-3xl overflow-y-scroll">
                                            <div className="w-full h-1/5 flex justify-between p-5 ">
                                                <h3 className="text-3xl">Reciente</h3>
                                                <span>asñldfjk</span>
                                            </div>
                                            <div className="absolute w-full h-4/5 divide-gray-200 divide-y-2 px-6 left-0 top-16 overflow-hidden">
                                                <Recient url={personaje4 + "1"} action="comentado" />
                                                <Recient url={personaje2 + "5"} action="reaccionado a" />
                                                <Recient url={personaje3 + "12"} action="compartido " />
                                                <Recient url={personaje3 + "2"} action="comentado " />
                                                <Recient url={personaje3 + "22"} action="comentado " />
                                                <Recient url={personaje3 + "22"} action="comentado " />
                                            </div>
                                        </div>
                                    </div>

                                    {/* BANNER */}
                                    <div className="relative h-full w-full pb-4">
                                        <Banner color="bg-terciario" img={imgs_banner[0]} >
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
                                </div>

                            </div>

                            {/* PANEL "LO ÚLTIMO" */}
                            <div className="w-1/4 h-screen flex flex-col bg-terciario/5 rounded-l-3xl shadow-xl shadow-gray-500/40">
                                <TheLast location={location} personaje={personaje} image={image}></TheLast>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
