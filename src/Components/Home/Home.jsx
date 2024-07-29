function Home() {
  return (
    <>
      <section className="bg-[#1abc9cd5] pt-[7rem]">
        <div className="container p-10">
          <div className="flex justify-center pb-5">
            <img
              src="./src/assets/avataaars.svg"
              alt="profile photo"
              className="w-[250px]"
            />
          </div>
          <div className="text-white text-center">
            <h2 className="mb-3 text-[30px] font-bold md:text-[40px]">
              START FRAMEWORK
            </h2>
            <div className="flex justify-center items-center mb-3">
              <div className="w-20 h-1 me-3 bg-white"></div>
              <i className="fa-solid fa-star"></i>
              <div className="w-20 h-1 ms-3 bg-white"></div>
            </div>
          </div>
          <div className="container">
            <div className="row px-5">
              <p className="text-white text-center">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
