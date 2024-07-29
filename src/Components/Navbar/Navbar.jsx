import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <nav className="p-4 bg-[#2c3e50] fixed top-0 w-full z-[8000]">
        <div className="container md:flex md:items-center md:justify-between text-white ">
          <div className="flex justify-between items-center">
            <span>
              <a className="text-xl text-white font-bold no-underline md:text-3xl">
                START FRAMEWORK
              </a>
            </span>
            <span>
              <img
                src="../src/assets/menu.png"
                className="w-12 cursor-pointer md:hidden block"
                alt="Menu"
                onClick={toggleMenu}
              />
            </span>
          </div>
          <div>
            <ul
              className={`md:flex md:items-center md:justify-center z-[-1] md:z-auto md:static absolute bg-[#2c3e50] w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 ${
                menuOpen ? "block" : "hidden"
              } md:opacity-100`}
            >
              <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
                <a
                  href="#"
                  className="text-base font-bold text-white no-underline rounded-md p-2"
                >
                  ABOUT
                </a>
              </li>
              <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
                <a
                  href="#"
                  className="text-base font-bold text-white no-underline rounded-md p-2"
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
                <a
                  href="#"
                  className="text-base font-bold text-white no-underline rounded-md p-2"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
