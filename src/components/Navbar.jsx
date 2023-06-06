import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {logo, menu, close } from "../assets";
// import logo from "../assets/a-logo.png";



const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav
    // take full width, centered, stay on the top and appear above other elements
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/" //changed from to="/'"
          className="flex items-center gap-2"
          onClick={()=>{
            setActive(""); //where we are in the page
            window.scrollTo(0,0); //scroll to top
          }}
          >
          <img src={logo} alt="a-logo" className="w-9 h-9 object contain" />
          <p className="text-white text-[18px] 
          font-bold cursor-pointer">Name <span 
          className="sm:block hidden"> |
            Javascript Mastery
          </span>

          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              }`}
            >
              <a href={`#${link.id}`}>
              {link.title}
              </a>
            </li>
          ))}
        </ul>
        </div>

    </nav>
  )
};


export default Navbar