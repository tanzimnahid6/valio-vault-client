const SectionTwo = () => {
  return (
    <div className="h-[110vh] md:h-[90vh]  flex flex-col md:flex md:flex-row justify-center w-full bg-gradient-to-t from-[#02030D] to-[#020104]">
      {/* left image section */}
      <div className="md:w-1/2  gap-0  flex justify-center md:order-1 order-2">
        <img className="scale-75" src="../../../assets/left-vault.png" alt="" />
      </div>
      {/* Right image section */}
      <div className="md:w-1/2 w-full  pl-20  md:order-2 order-1 flex justify-center items-center">
        <div>
          <img src="../../../assets/number-two.svg" alt="" />
          <div className="">
            <h1 className="text-4xl font-bold text-white">
              Deposit and monitor
            </h1>
            <p className="text-gray-300">
              Keep track of the manager <br /> performance regularly
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
