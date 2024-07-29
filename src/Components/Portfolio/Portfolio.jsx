function Portfolio() {
  return (
    <>
      <section className="bg-[#ffffffd5] text-[#2c3e50] pt-[3rem]">
        <div className="container p-10">
          <div className=" text-center">
            <h2 className="mb-3 text-[30px] font-bold md:text-[40px]">
              PORTFOLIO COMPONENT
            </h2>
            <div className="flex justify-center items-center mb-3">
              <div className="w-20 h-1 me-3 bg-[#2c3e50]"></div>
              <i className="fa-solid fa-star"></i>
              <div className="w-20 h-1 ms-3 bg-[#2c3e50]"></div>
            </div>
          </div>
          <div className="container mx-auto mt-5 px-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/poert1.png"
                    alt="poert1"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/port2.png"
                    alt="port2"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/port3.png"
                    alt="port3"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/poert1.png"
                    alt="poert1"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/port2.png"
                    alt="port2"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-1/3 px-6 mb-12">
                <div className="relative group">
                  <img
                    src="./src/assets/port3.png"
                    alt="port3"
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-[#1abc9ce6] cursor-pointer rounded-xl opacity-[0] group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fa-solid fa-plus text-white font-bold text-[50px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
