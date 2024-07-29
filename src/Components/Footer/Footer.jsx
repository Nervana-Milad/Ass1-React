function Footer() {
  return (
    <>
      <footer className="text-white w-full relative">
        <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 py-7 bg-[#2c3e50]">
          <div className="container flex flex-col md:flex-row justify-between p-6">
            <div className="flex flex-col items-start md:items-center md:flex-1 p-4">
              <h3 className="pb-3 text-[28px] font-medium">LOCATION</h3>
              <p className="pb-2 text-base">2215 John Daniel Drive</p>
              <p className="text-base">Clark, MO 65243</p>
            </div>

            <div className="flex flex-col items-start md:items-center md:flex-1 p-4">
              <h3 className="pb-3 text-[28px] font-medium">AROUND THE WEB</h3>
              <div className="icons flex space-x-4">
                <i className="icon fa-brands fa-facebook"></i>
                <i className="icon fa-brands fa-twitter"></i>
                <i className="icon fa-brands fa-linkedin"></i>
                <i className="icon fa-solid fa-globe"></i>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center md:flex-1 p-4">
              <h3 className="pb-3 text-[28px] font-medium">ABOUT FREELANCER</h3>
              <p className="text-center">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 py-7 bg-[#1e252f] text-center">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}

export default Footer;
