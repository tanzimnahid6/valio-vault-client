import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/company_logo/1.jpg'
import logo2 from '../../../assets/company_logo/2.png'
import logo3 from '../../../assets/company_logo/3.png'
import logo4 from '../../../assets/company_logo/4.png'
import './banner.css'

const Marque = () => {
    return (
      <div className="-mt-2 border-top md:flex px-8 bg-black text-white items-center -z-10 py-1  overflow-hidden">
        <h1 className=" text-center w-full md:w-2/5 text-xl font-bold">Supported integrations</h1>
        <Marquee className="w-full md:w-3/5">
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