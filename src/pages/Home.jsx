import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
// import "./Home.css";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative text-white">
        <img src={hero_banner} alt="banner-img" className="banner-img" />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt=""
            className="w-[90%] max-w-[420px] mb-[30px]"
          />
          <p className="max-w-[700px] text-[17px] mb 20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatem nobis suscipit harum, quos reprehenderit sint officia
          </p>

          <div className="flex gap-[10px] mb-[50px] ">
            <button className="btn border-0 outline-none py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-[600] bg-white rounded-[4px] cursor-pointer text-black">
              <img src={play_icon} alt="" className="w-[25px]" />
              Play
            </button>
            <button className="dark-btn border-0 outline-none py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-[600] rounded-[4px] cursor-pointer text-white ">
              <img src={info_icon} alt="" className="w-[25px]" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-[6%]">
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Pics for You" category="now_playing" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
