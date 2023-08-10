import Marque from "./Marque";


const Banner = () => {
    return (
      <>
        <div className="pt-28 flex flex-col text-center md:text-left text-white gap-6 p-8">
          <video
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 -z-10 brightness-50   mt-16 h-full md:h-[75vh]
         w-[100vw]  mx-auto object-cover"
          >
            <source src="../../../assets/hero.mp4" type="video/mp4" />
          </video>
          <h1 className=" text-4xl md:text-5xl font-bold ">
            Making money in Web3 is hard. <br /> Let the pros do it for you
          </h1>
          <p className="md:text-xl text-gray-300">
            Valio lets you back leading traders in a trustless and secure way.
            Achieve <br /> smart exposure to Web3 finance, without making it
            your full time job.
          </p>
          <p className="md:text-xl text-gray-300">
            Or… Do you think you’re good at making money onchain? Become <br />{" "}
            a manager on Valio and earn fees! Built on
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary">Deposite</button>
            <button className="btn btn-secondary">Create Vault</button>
          </div>
        </div>
        <Marque></Marque>
      </>
    );
};

export default Banner;