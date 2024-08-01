function About() {
  return (
    <>
      <section className="bg-[#1abc9cd5] z-[-1] pt-[8rem]">
        <div className="container p-10">
          <div className="text-white text-center">
            <h2 className="mb-3 text-[30px] font-bold md:text-[40px]">
              ABOUT COMPONENT
            </h2>
            <div className="flex justify-center items-center mb-3">
              <div className="w-20 h-1 me-3 bg-white"></div>
              <i className="fa-solid fa-star"></i>
              <div className="w-20 h-1 ms-3 bg-white"></div>
            </div>
          </div>
          <div className="container">
            <div className="py-5">
              <div className="text-white md:flex">
                <div className="px-7">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="px-7">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
