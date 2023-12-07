
const info = ["reciente", "popular"]
import IconoPersonalizado from "../Nav_bar/icons";
import Card from "../Card/Card";
import { SlArrowRight } from "react-icons/sl";

const icono = <SlArrowRight />;

const TheLast = ({ location, personaje, image }) => {
    return (
        <>
            <div className="h-full w-full p-5 flex flex-col content-end ">
                <div className="flex justify-between mb-5">
                    <div className="w-full">
                        <h2 className="text-3xl">
                            Lo último
                        </h2>
                    </div>
                    <div>
                        <button>asdfasdf</button>
                    </div>
                </div>

                <div className="w-full h-5/6">
                    <div className="w-5 h-auto mb-5">
                        <ul className="flex gap-3">
                            <li className="text-xl flex justify-center items-center">
                                <IconoPersonalizado icono={icono} ></IconoPersonalizado>
                                <span>Reciente</span>
                            </li>
                            <li className="text-xl flex items-center text-gray-400">Popular</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 divide-y-1 divide-gray-200">
                        <Card location={location} personaje={personaje} image={image}></Card>
                        <Card location={location} personaje={personaje} image={image}></Card>
                    </div>

                </div>
            </div>
        </>
    )
};

export default TheLast;