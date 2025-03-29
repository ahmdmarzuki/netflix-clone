import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y0NDBlYzBjOGUzNTRkMjc4OThhMDZhNWM1N2MzYyIsIm5iZiI6MTc0MzI1MTkxNC41Mzc5OTk5LCJzdWIiOiI2N2U3ZTljYTYyMTQ1MjVjZDU2MzcxZWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZIVngKoDAenUFNyYNFKfujBRtrketU_0_pMKSrcnfB4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>
      <div className="text-white flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
