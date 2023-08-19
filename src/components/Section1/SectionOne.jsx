const SectionOne = () => {
  return (
    <div className="h-[160vh] sm:h-[150vh] md:h-[110vh]  border-red-500  bg-gradient-to-t from-[#020104] to-[#0f0429] w-full overflow-hidden">
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold text-white">
          Back any trader in 3 easy steps
        </h1>
        <br />
        <p className="-m-4 text-gray-300">
          Valio is non-custodial. Withdraw any time - no lockups
        </p>
      </div>
      <div className="w-full mt-10  md:flex items-center ">
        {/* Left Side */}
        <div className="md:w-1/2 h-[40vh] md:h-[90vh] w-full  flex pt-16 md:pt-40">
          <img
            className="absolute left-24  md:left-[260px]  "
            src="../../../assets/number-one.svg"
            alt=""
          />
          <div className="absolute md:mt-24 left-40 sm:left-60  md:left-52 ">
            <h1 className="text-white text-4xl font-bold">Select manager <br /> and fund</h1>
            <p className="text-gray-300 md:text-xl">Make sure you pick the right risk <br /> profile</p>
          </div>
        </div>
        {/* Right side */}

         <div className="md:w-1/2 h-[80vh] md:h-[90vh]  w-full md:relative  xl:pl-20 xl:pt-14">
            <img className=" z-10 absolute " src="../../../assets/vaults-big-logo.svg" alt="" />
            <img className=" z-10 absolute left-16 mt-16  md:left-16 md:mt-8 xl:ml-20" src="../../../assets/card-bg1.svg" alt="" />
            <img className=" z-10 absolute left-32 mt-[150px]  md:left-40  xl:ml-20" src="../../../assets/card-bg2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
