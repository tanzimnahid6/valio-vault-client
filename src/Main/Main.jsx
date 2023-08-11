import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/NavBar";
import SectionOne from "../components/Section1/SectionOne";
import SectionTwo from "../components/Section2/SectionTwo";


const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
      </div>
    );
};

export default Main;