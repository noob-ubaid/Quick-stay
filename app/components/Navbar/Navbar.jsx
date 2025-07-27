"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaStaylinked } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, name: "Home", pathname: "/home" },
    { id: 2, name: "Destination", pathname: "/destination" },
    { id: 3, name: "Experiences", pathname: "/experiences" },
    { id: 4, name: "About Us", pathname: "/about" },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-[1500px] mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content flex flex-col gap-4 bg-gray-300 rounded-box z-10 mt-3 w-52 p-2 shadow">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      className={`font-medium ${
                        pathname === link.pathname ? "text-black" : "text-[#776E6E]"
                      }`}
                      href={link.pathname}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <FaStaylinked size={22} />
              <h1 className="font-semibold text-xl md:text-2xl">QuickStay</h1>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex items-center gap-8 px-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    className={`font-medium ${
                      pathname === link.pathname
                        ? "text-black font-semibold"
                        : "text-[#776E6E]"
                    }`}
                    href={link.pathname}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link className="bg-black px-6 py-2 rounded-full text-white" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
