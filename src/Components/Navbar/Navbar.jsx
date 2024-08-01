// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import menu from "../../assets/menu.png";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   function toggleMenu() {
//     setMenuOpen(!menuOpen);
//   }
//   return (
//     <>
//       <nav className="p-4 bg-[#2c3e50] static 2xl:fixed start-0 top-0 end-0 z-[90000]">
//         <div className="container md:flex md:items-center md:justify-between text-white ">
//           <div className="flex justify-between items-center">
//             <span>
//               <a className="text-xl text-white font-bold no-underline md:text-3xl">
//                 START FRAMEWORK
//               </a>
//             </span>
//             <span>
//               <img
//                 src={menu}
//                 className="w-12 cursor-pointer md:hidden block"
//                 alt="Menu"
//                 onClick={toggleMenu}
//               />
//             </span>
//           </div>
//           <div>
//             <ul
//               className={`md:flex md:items-center md:justify-center z-[-1] md:z-auto md:static absolute bg-[#2c3e50] w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 ${
//                 menuOpen ? "block" : "hidden"
//               } md:opacity-100`}
//             >
//               <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
//                 <NavLink
//                   to={"about"}
//                   className={
//                     "text-base font-bold text-white no-underline rounded-md p-2"
//                   }
//                 >
//                   ABOUT
//                 </NavLink>
//               </li>
//               <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
//                 <NavLink
//                   to={"portfolio"}
//                   className={
//                     "text-base font-bold text-white no-underline rounded-md p-2"
//                   }
//                 >
//                   PORTFOLIO
//                 </NavLink>
//               </li>
//               <li className="mx-4 mb-0 ms-0 my-4 md:my-0">
//                 <NavLink
//                   to={"contact"}
//                   className={
//                     "text-base font-bold text-white no-underline rounded-md p-2"
//                   }
//                 >
//                   CONTACT
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="p-4 bg-[#2c3e50] fixed top-0 start-0 end-0 z-[90000]">
        <div className="container md:flex md:items-center md:justify-between text-white">
          <div className="flex justify-between items-center">
            <span>
              <a className="text-xl text-white font-bold no-underline md:text-3xl">
                START FRAMEWORK
              </a>
            </span>
            <span>
              <img
                src={menu}
                className="w-12 cursor-pointer md:hidden block"
                alt="Menu"
                onClick={toggleMenu}
              />
            </span>
          </div>
          <div>
            <ul
              className={`md:flex md:items-center md:justify-center absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-[#2c3e50] md:bg-transparent md:opacity-100 transition-transform duration-300 ease-in-out ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                <NavLink
                  to={"about"}
                  className={
                    "text-base font-bold text-white no-underline rounded-md p-2"
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                <NavLink
                  to={"portfolio"}
                  className={
                    "text-base font-bold text-white no-underline rounded-md p-2"
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                <NavLink
                  to={"contact"}
                  className={
                    "text-base font-bold text-white no-underline rounded-md p-2"
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
