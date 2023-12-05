import Side_bar from "../../components/Sidebar/inde";

const Home = () => {
    return (
        <>
            <div className="bg-primario w-screen h-screen flex">
                <Side_bar className="w-2/12"></Side_bar>/
                <div className="w-11/12 h-full">container</div>
            </div>
        </>
    );
};

export default Home;
