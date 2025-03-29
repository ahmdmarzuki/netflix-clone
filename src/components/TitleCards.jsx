import React, { useRef, useEffect, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y0NDBlYzBjOGUzNTRkMjc4OThhMDZhNWM1N2MzYyIsIm5iZiI6MTc0MzI1MTkxNC41Mzc5OTk5LCJzdWIiOiI2N2U3ZTljYTYyMTQ1MjVjZDU2MzcxZWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZIVngKoDAenUFNyYNFKfujBRtrketU_0_pMKSrcnfB4",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-[8px] text-white">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="scrollbar-hidden flex gap-[10px] overflow-x-scroll"
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index} className="relative ">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt=""
                className="relative min-w-[240px] rounded-[4px] cursor-pointer"
              />
              <p className="absolute bottom-0 text-white">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
