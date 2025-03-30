import React, { use } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { useRef, useState, useEffect } from "react";
import { logout } from "../firebase";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add("bg-[#141414]");
      } else {
        navRef.current.classList.remove("bg-[#141414]");
      }
    });
  }, []);

  const nav = [
    { title: "Home" },
    { title: "TV Shows" },
    { title: "Movies" },
    { title: "New & Popular" },
    { title: "My List" },
    { title: "Browse by Languages" },
  ];
  return (
    <div
      ref={navRef}
      className="text-white w-full flex justify-between p-[20px] fixed z-10"
    >
      <div className="flex items-center gap-[50px]">
        <img src={logo} alt="logo" className="w-[90px]" />
        {nav.map((item) => {
          return <p className="cursor-pointer">{item.title}</p>;
        })}
      </div>
      <div className="flex items-center gap-[20px]">
        <img
          src={search_icon}
          alt="icons"
          className="w-[20px] cursor-pointer"
        />
        <p>children</p>
        <img src={bell_icon} alt="icons" className="w-[20px] cursor-pointer" />
        <div
          className="flex items-center gap-[10px] cursor-pointer relative "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <img
            src={profile_img}
            alt=""
            className="w-[35px] cursor-pointer rounded-[4px]"
          />
          <img src={caret_icon} alt="" className="cursor-pointer" />

          {isOpen && (
            <div className="absolute top-[100%] right-0 w-max px-[22px] py-[18px] rounded-[2px] underline z-10 bg-gray-800 ">
              <p
                onClick={() => {
                  logout();
                }}
                className="text-[13px] cursor-pointer"
              >
                Sign Out of Netflix
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
