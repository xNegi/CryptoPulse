import { useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleUser,
  faBriefcase,
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const Navbar = () => {
  const { isLoggedin, user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <nav className=" flex items-center justify-between text-xl w-full h-12 px-4 border Bgray ">
      <div className="flex items-center font-bold text-2xl">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-22 w-24" src="/CryptoPulse_logo.png" />
          <span className="font-extrabold">CryptoPulse</span>
        </Link>
      </div>

      <div className="flex items-center gap-6 ">
        <a
          href="/portfolio"
          className=" flex items-center gap-2 hover:text-blue-500 text"
        >
          <FontAwesomeIcon icon={faBriefcase} />
          Portfolio
        </a>
        <a
          href="/watchlist"
          className=" flex items-center gap-2 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faStar} /> WatchList
        </a>

        <input
          type="text"
          placeholder="Search"
          className="border px-2 py-1 rounded-md text-sm"
        />

        <div className="relative group" ref={dropdownRef}>
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-2xl cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />

          <div
            className={`dropdown absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg
              transition-all duration-200 origin-top-right
               ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
              `}
          >
            <ul className="text-sm">
              {!isLoggedin ? (
                <>
                  {isLoggedin && (
                    <li className="px-4 py-2 text-gray-500 border-b">
                      Hello, {user?.username}
                    </li>
                  )}
                  <Link to="/Login" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover hover:bg-gray-100 cursor-pointer">
                      Login
                    </li>
                  </Link>

                  <Link to="/Signup" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover hover:bg-gray-100 cursor-pointer">
                      SignUp
                    </li>
                  </Link>

                </>
              ) : (
                <>
                  <Link to="/profile" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                      <FontAwesomeIcon icon={faUser} />
                      Profile 
                    </li>
                  </Link>

                  <Link to="/portfolio" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                      <FontAwesomeIcon icon={faBriefcase} />
                      Portfolio
                    </li>
                  </Link>

                  <Link to="/watchlist" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                      <FontAwesomeIcon icon={faStar} />
                      Watchlist
                    </li>
                  </Link>

                  <Link to="/Settings" onClick={() => setOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                      <FontAwesomeIcon icon={faGear} />
                      Settings
                    </li>
                  </Link> 

                  <li className="px-4 py-2 flex items-center justify-between">
                    <ThemeToggle />
                  </li>

                  <li
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="px-5 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center text-red-500"
                  >
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Logout
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
