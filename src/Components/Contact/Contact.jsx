function Contact() {
  return (
    <>
      <section className="bg-[#ffffffd5] pt-[3rem]">
        <div className="container pb-5">
          <div className="text-[#2c3e50] text-center">
            <h2 className="mb-3 text-[30px] font-bold md:text-[40px]">
              CONATCT SECTION
            </h2>
            <div className="flex justify-center items-center mb-3">
              <div className="w-20 h-1 me-3 bg-[#2c3e50]"></div>
              <i className="fa-solid fa-star"></i>
              <div className="w-20 h-1 ms-3 bg-[#2c3e50]"></div>
            </div>
          </div>
          <div className="container text-center">
            <div className="py-4">
              <input
                placeholder="userName"
                type="text"
                className="border-b-[1.5px] rounded-lg px-3 w-[50%] py-2 border-gray-600 focus:outline-none"
              />
            </div>
            <div className="py-4">
              <input
                placeholder="userAge"
                type="number"
                className="border-b-[1.5px] rounded-lg px-3 w-[50%] py-2 border-gray-600 focus:outline-none"
              />
            </div>
            <div className="py-4">
              <input
                placeholder="userEmail"
                type="email"
                className="border-b-[1.5px] rounded-lg px-3 w-[50%] py-2 border-gray-600 focus:outline-none"
              />
            </div>
            <div className="py-4">
              <input
                placeholder="userPassword"
                type="password"
                className="border-b-[1.5px] rounded-lg px-3 w-[50%] py-2 border-gray-600 focus:outline-none"
              />
            </div>
            <div className="py-4">
              <button className="btn-primary px-4 py-2 rounded-lg text-white bg-[#1abc9c]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
