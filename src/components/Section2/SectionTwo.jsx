

const SectionTwo = () => {
    return (
      <div className="h-[130vh] md:h-[100vh] md:flex w-full  bg-gradient-to-t from-[#02030D] to-[#020104]">
        <div className="w-1/2">
          <img
            className="md:ml-56 ml-28 z-10"
            src="../../../assets/card-bg3.svg"
            alt=""
          />
          <img
            className="md:ml-[96px] ml-[110px] md:scale-100 scale-x-150 -mt-10 md:-mt-[80px] -z-10 brightness-50"
            src="../../../assets/under-side.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full mt-24 ml-20 ">
          <img src="../../../assets/number-two.svg" alt="" />
          <div className="-mt-8">
            <h1 className="text-4xl font-bold text-white">
              Deposit and monitor
            </h1>
            <p className="text-gray-300">
              Keep track of the manager <br /> performance regularly
            </p>
          </div>
        </div>
      </div>
    );
};

export default SectionTwo;