import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header () {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold text-orange-500">
          Food<span className="text-white">truck</span>
        </div>

        {/* Navigation - Hidden on smaller screens */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 text-sm font-medium">      

    <Link className="hover:text-orange-400" href="/">
      Home
    </Link>

    <Link className="hover:text-orange-400" href="/Menu">
      Menu
    </Link>

    <Link className="hover:text-orange-400" href="/Blog">
      Blog
    </Link>
  
    <Link className="hover:text-orange-400" href="/Pages">
      Pages
    </Link>

    <Link className="hover:text-orange-400" href="/About">
    About
    </Link>
  
    <Link className="hover:text-orange-400" href="/Shop">
    Shop
    </Link>

    <Link className="hover:text-orange-400" href="/Contact">
    Contact
    </Link>
 

          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="hover:text-orange-500 cursor-pointer" />
         <Link href="/SignUp"><FaUser className="hover:text-orange-500 cursor-pointer" /></Link> 
          <FaShoppingCart className="hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white focus:outline-none">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Navigation Menu (Dropdown) */}
      <nav className="lg:hidden bg-black">
        <ul className="flex flex-col space-y-2 py-4 px-6 text-sm font-medium">
   

        <Link className="hover:text-orange-400" href="/">
      Home
    </Link>

    <Link className="hover:text-orange-400" href="/Menu">
      Menu
    </Link>

    <Link className="hover:text-orange-400" href="/Blog">
      Blog
    </Link>
  
    <Link className="hover:text-orange-400" href="/Pages">
      Pages
    </Link>

    <Link className="hover:text-orange-400" href="/About">
    About
    </Link>
  
    <Link className="hover:text-orange-400" href="/Shop">
    Shop
    </Link>

    <Link className="hover:text-orange-400" href="/Contact">
    Contact
    </Link>

        </ul>
      </nav>
    </div>
  );
};
