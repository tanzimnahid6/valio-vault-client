

const Banner = () => {
  return (
    <>
      <div className="pt-28  md:pl-24 p-8 md:pb-24  flex relative flex-col text-center md:text-left text-white gap-6">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 -z-10 brightness-50 mt-12  
         w-[100vw] h-full mx-auto object-cover"
        >
          <source src="../../../assets/hero.mp4" type="video/mp4" />
        </video>
        <h1 className=" text-4xl md:text-4xl font-bold ">
          Making money in Web3 is hard. <br /> Let the pros do it for you
        </h1>
        <p className=" text-gray-300">
          Valio lets you back leading traders in a trustless and secure way.
          Achieve <br /> smart exposure to Web3 finance, without making it your
          full time job.
        </p>
        <p className=" -mt-2 text-gray-300">
          Or… Do you think you’re good at making money onchain? Become <br /> a
          manager on Valio and earn fees! Built on
        </p>
        <div className="md:flexw-full flex-col space-y-2 md:space-x-2">
          <button className="btn btn-primary w-full md:w-[200px]">
            Deposite
          </button>
          <button className="btn btn-secondary btn-outline w-full md:w-[200px]">
            Create Vault
          </button>
        </div>
      </div>
     
    </>
  );
};

export default Banner;
