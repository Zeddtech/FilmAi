import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { CiBellOn } from 'react-icons/ci';
import { IoPersonSharp } from 'react-icons/io5';

const Header = () => {
    return (
        <header className="bg-gradient-to-b from-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 mr-4" />
                <nav className="hidden md:flex space-x-4 text-sm  font-bold">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/tv-shows" className="hover:text-gray-400">TV Shows</Link>
                    <Link to="/movies" className="hover:text-gray-400">Movies</Link>
                    <Link to="/new-popular" className="hover:text-gray-400">New & Popular</Link>
                    <Link to="/my-list" className="hover:text-gray-400">My List</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/search" className="hover:text-gray-400"><IoMdSearch /></Link>
                <Link to="/notifications" className="hover:text-gray-400"><CiBellOn /></Link>
                <Link to="/profile" className="hover:text-gray-400"><IoPersonSharp /></Link>
            </div>
        </header>
    );
};

export default Header;