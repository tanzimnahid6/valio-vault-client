import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/company_logo/1.jpg'
import logo2 from '../../../assets/company_logo/2.png'
import logo3 from '../../../assets/company_logo/3.png'
import logo4 from '../../../assets/company_logo/4.png'

const Marque = () => {
    return (
      <div className="mt- flex px-8 bg-black text-white items-center py-2 border-t-2">
        <h1 className="w-[30vw] text-xl font-bold">Supported integrations</h1>
        <Marquee className="w-[70vw]">
          <div className="flex gap-12">
            <img className="w-20 scale-75 rounded-lg" src={logo1} alt="" />
            <img className="w-20 scale-75 rounded-lg" src={logo2} alt="" />
            <img className="w-20 scale-75 rounded-lg" src={logo3} alt="" />
            <img className="w-20 scale-75 rounded-lg" src={logo4} alt="" />
            <img className="w-20 scale-75 rounded-lg" src={logo2} alt="" />
            <img className="w-20 scale-75 rounded-lg" src={logo3} alt="" />
          </div>
        </Marquee>
      </div>
    );
};

export default Marque;