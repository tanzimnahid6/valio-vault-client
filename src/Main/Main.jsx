import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/NavBar";
import SectionOne from "../components/Section1/SectionOne";


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <SectionOne></SectionOne>
        </div>
    );
};

export default Main;