import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  const nav = [
    { title: "Home" },
    { title: "TV Shows" },
    { title: "Movies" },
    { title: "New & Popular" },
    { title: "My List" },
    { title: "Browse by Languages" },
  ];
  return (
    <div className="text-white w-full flex justify-between p-[20px] fixed">
      <div>
        <img src={logo} alt="logo" />
        {nav.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
      <div>
        <img src={search_icon} alt="icons" />
        <p>children</p>
        <img src={bell_icon} alt="icons" />
        <div>
          <img src={profile_img} alt="" />
          <img src={caret_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
