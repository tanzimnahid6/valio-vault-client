import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/NavBar";


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <div className="h-96"></div>
        </div>
    );
};

export default Main;