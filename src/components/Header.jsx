import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { IoMdSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { TbMenuDeep, TbX } from "react-icons/tb";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((prevState) => !prevState);
  const setFalse = () => setState(false);
  return [state, toggle, setFalse];
};

const NavLinks = () => (
  <>
    <Link to="/" className="hover:text-gray-300 pt-3">
      Home
    </Link>
    <Link to="/tv-shows" className="hover:text-gray-300">
      TV Shows
    </Link>
    <Link to="/movies" className="hover:text-gray-300">
      Movies
    </Link>
    <Link to="/new-popular" className="hover:text-gray-300">
      New & Popular
    </Link>
    <Link to="/my-list" className="hover:text-gray-300 pb-3">
      My List
    </Link>
  </>
);

const Header = () => {
  const [openMenu, toggleMenu] = useToggle(false);
  const [openProfile, toggleProfile, setProfileFalse] = useToggle(false);
  const [openNotification, toggleNotification, setNotificationFalse] =
    useToggle(false);
  return (
    <header className="text-white px-4 py-6 flex justify-between items-center sticky top-0 bg-gray-700 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
        <nav className="space-x-4 text-sm font-bold z-10">
          <div
            className={`navCon flex-col absolute flex inset-x-0 mt-10 px-5 gap-3 rounded-md bg-gray-700 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              openMenu ? "max-h-96" : "max-h-0"
            } md:relative md:flex-row md:mt-0 md:bg-transparent md:max-h-96`}
          >
            <NavLinks />
          </div>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="navIcon md:hidden border-[3px] border-gray-700 rounded-md p-3 mr-3"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {openMenu ? (
            <TbX className="h-6 w-6" />
          ) : (
            <TbMenuDeep className="h-6 w-6" />
          )}
        </button>

        <div className="relative">
          <button className="hover:text-gray-400" aria-label="Search">
            <IoMdSearch />
          </button>
        </div>
        <div className="relative">
          <button
            className="hover:text-gray-400"
            aria-label="Notifications "
            onClick={() => {
              setProfileFalse();
              toggleNotification();
            }}
          >
            <CiBellOn />
          </button>
          <div
            className={`absolute right-0 w-48 mt-7 bg-gray-700 rounded-md text-sm font-bold py-3 z-20 ${
              openNotification ? "block" : "hidden"
            }`}
          >
            <p className="px-4">No new notifications</p>
          </div>
        </div>

        <div className="relative">
          <button
            className="hover:text-gray-400"
            aria-label="Profile"
            onClick={() => {
              setNotificationFalse();
              toggleProfile();
            }}
          >
            <IoPersonSharp />
          </button>

          <div
            className={`absolute right-0 w-48 mt-7 py-3 bg-gray-700 rounded-md text-sm font-bold z-20 ${
              openProfile ? "block" : "hidden"
            }`}
          >
            <Link to="/profile" className="block px-4 hover:text-gray-300">
              Profile
            </Link>
            <Link to="/account" className="block px-4 pt-3 hover:text-gray-300">
              Account
            </Link>
            <Link to="/logout" className="block px-4 pt-3 hover:text-gray-300">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
