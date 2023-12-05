import Side_bar from "../../components/Sidebar/inde";
import Profile from "../../components/Nav_bar/profile";

const api = "https://rickandmortyapi.com/api/character/1";

const Home = () => {
    return (
        <>
            {/* <div className="bg-primario w-screen h-screen flex"> */}
            {/* <Side_bar className="w-2/12"></Side_bar>/
                <div className="w-11/12 h-full">container</div> */}
            {/* <Profile/> */}
            <Profile url={api}></Profile>
            {/* </div> */}
        </>
    );
};

export default Home;
