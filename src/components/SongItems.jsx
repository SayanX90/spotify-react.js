import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItems = ({ name, image, desc, id }) => {
  
    const{playWithId } = useContext(PlayerContext);


  return (
    <div onClick={() =>playWithId(id)} className="min-w-[160px] rounded p-2 px-3 cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded " src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="test-sm text-slate-200 ">{desc}</p>
    </div>
  );
};

export default SongItems;
