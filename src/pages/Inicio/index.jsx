import NavBar from "../../components/Nav_bar/Nav_bar";
import Side_bar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Card_profile from "../../components/Card/Card_profile";
import Banner from "../../components/Banner/Banner";

const location = "https://rickandmortyapi.com/api/location/1";
const personaje = "https://rickandmortyapi.com/api/character/38";


//* esta variable se hizo con el objeto de "simular" el consumo de la api, 
//* dado que la consumida no contiene imagenes para las ubicaciones

const image = "https://img.freepik.com/vector-premium/planeta-tierra-luna-espacio_175250-407.jpg";


const Home = () => {
    return (
        <>
            {/* <div className="bg-primario w-screen h-screen flex">
            <Side_bar className="w-2/12"></Side_bar> */}
            {/* <Profile/> */}
            {/* <Card location={location} personaje={personaje} img={image}></Card> */}
            
            {/* </div> */}
        </>
    );
};

export default Home;
