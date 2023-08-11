

const Footer = () => {
    return (
      <div className="md:flex h-52 bg-[#030307] border-top">
        <div className="md:w-1/2  flex ml-24 mt-12">
          <div className="mx-auto md:mx-0">
            <img className="scale-90" src="../../../assets/logo.svg" alt="" />
            <h1 className="text-gray-500 text-sm">
              Valio.xyz © All Rights Reserved 2023
            </h1>
          </div>
        </div>
        <div className="md:w-1/2 text-sm flex justify-center gap-12 mt-8">
          <div>
            <h1 className="text-white">Misc</h1>
            <ul className="text-gray-500">
              <li>Contact Me</li>
              <li>Careers</li>
              <li>Bug Bountry</li>
            </ul>
          </div>
          <div>
            <h1 className="text-white">Legal</h1>
            <ul className="text-gray-500">
              <li>Terms of Service</li>
              <li>Risk Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="text-white">Partnarship</h1>
            <ul className="text-gray-500">
              <li>Protocol integration</li>
              <li>Apply as DAO</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;