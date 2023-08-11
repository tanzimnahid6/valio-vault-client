import Banner from "../components/Banner/Banner";
import Marque from "../components/Banner/Marque";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/NavBar";
import SectionOne from "../components/Section1/SectionOne";
import SectionTwo from "../components/Section2/SectionTwo";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Marque></Marque>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>

      <Footer></Footer>
    </div>
  );
};

export default Main;
