import NavBar from "../../components/Nav_bar/Nav_bar";
import Side_bar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Card_profile from "../../components/Card/Card_profile";
import Banner from "../../components/Banner/Banner";
import Block_Card from "../../components/Card/Bloque_Card";
import Author from "../../components/Author/Author";

const location = "https://rickandmortyapi.com/api/location/1";
const personaje = "https://rickandmortyapi.com/api/character/1";
const personaje2 = "https://rickandmortyapi.com/api/character/2";
const personaje3= "https://rickandmortyapi.com/api/character/3";


//* esta variable se hizo con el objeto de "simular" el consumo de la api, 
//* dado que la consumida no contiene imagenes para las ubicaciones

const image = "https://img.freepik.com/vector-premium/planeta-tierra-luna-espacio_175250-407.jpg";


const Home = () => {
    return (
        <>
            <div className="bg-[#fff] w-screen h-screen flex">
                {/* <Side_bar className="w-2/12"></Side_bar> */}
                {/* <Card location={location} personaje={personaje} img={image}></Card> */}
                <div className="bg-[#fff] w-3/12 h-[5rem] m-1 divide-white-300 divide-y-1">
                    <Author url={personaje} />
                    <Author url={personaje2} />
                    <Author url={personaje3} />
                </div>
            </div>
        </>
    );
};

export default Home;
