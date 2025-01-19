import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { CiBellOn } from 'react-icons/ci';
import { IoPersonSharp } from 'react-icons/io5';
import { TbMenuDeep, TbX } from 'react-icons/tb';

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = () => setState(prevState => !prevState);
    return [state, toggle];
};

const NavLinks = () => (
    <>
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/tv-shows" className="hover:text-gray-300">TV Shows</Link>
        <Link to="/movies" className="hover:text-gray-300">Movies</Link>
        <Link to="/new-popular" className="hover:text-gray-300">New & Popular</Link>
        <Link to="/my-list" className="hover:text-gray-300">My List</Link>
    </>
);

const Header = () => {
    const [openMenu, toggleMenu] = useToggle(false);

    return (
        <header className="text-white px-4 pt-10 pb-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 mr-4" />
                <nav className="space-x-4 text-sm font-bold">
                    <div className={`navCon flex-col absolute flex inset-x-0 mt-10 px-5 gap-3 rounded-md bg-gray-700 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openMenu ? 'max-h-96 py-3' : 'max-h-0'} md:relative md:flex-row md:mt-0 md:bg-transparent md:max-h-96`}>
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
                    {openMenu ? <TbX className='h-6 w-6' /> : <TbMenuDeep className='h-6 w-6' />}
                </button>
                <Link to="/search" className="hover:text-gray-400" aria-label="Search"><IoMdSearch /></Link>
                <Link to="/notifications" className="hover:text-gray-400" aria-label="Notifications"><CiBellOn /></Link>
                <Link to="/profile" className="hover:text-gray-400" aria-label="Profile"><IoPersonSharp /></Link>
            </div>
        </header>
    );
};

export default Header;