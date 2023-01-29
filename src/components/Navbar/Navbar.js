import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <nav className="flex justify-between bg-gray-900 text-white w-full">
                <div className="px-5 xl:px-12 py-4 flex justify-between  w-full items-center">
                    <Link className="text-3xl font-bold font-heading" to="/">
                        Power Hack
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden md:flex px-4 font-semibold font-heading space-x-4 items-center">
                        <li className="mr-10  ">
                            <NavLink to="/billingPage">
                                Go To Billing Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <button className="bg-[#51DBDC] py-2 px-5 text-xl rounded-lg border-0">Log In</button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">
                                <button className="bg-[#51DBDC] py-2 px-5 text-xl rounded-lg border-0">Sign Up</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Responsive navbar */}
                <a className="xl:hidden flex mr-6 items-center" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </a>
                <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>
        </>
    );
};

export default Navbar;