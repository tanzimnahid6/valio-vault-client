const SectionOne = () => {
  return (
    <div className="h-[120vh] bg-gradient-to-t from-[#020104] to-[#0f0429] w-full overflow-hidden">
      <div className="text-center pt-24">
        <h1 className="text-4xl font-bold text-white">
          Back any trader in 3 easy steps
        </h1>
        <br />
        <p className="-m-4 text-gray-300">
          Valio is non-custodial. Withdraw any time - no lockups
        </p>
      </div>
      <div className=" w-full  mt-24 flex  ">
        {/* Left Side */}
        <div className="w-1/2  relative">
          <img
            className="absolute left-56 scale-90"
            src="../../../assets/number-one.svg"
            alt=""
          />
          <div className="absolute mt-24  left-52">
            <h1 className="text-white text-3xl font-bold">Select manager <br /> and fund</h1>
            <p className="text-gray-300">Make sure you pick the right risk <br /> profile</p>
          </div>
        </div>
        {/* Right side */}

        <div className="w-1/2 relative bg-stone-700">
            <img className="scale-75 z-10 absolute -mt-20" src="../../../assets/vaults-big-logo.svg" alt="" />
            <img className="scale-75 z-10 absolute -mt-[25px] left-10" src="../../../assets/card-bg1.svg" alt="" />
            <img className="scale-75 z-10 absolute mt-[50px] left-40" src="../../../assets/card-bg2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
