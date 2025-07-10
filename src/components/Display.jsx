import React, { useRef } from "react";
import { Route, Routes, useLocation, } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import { useEffect } from "react";

const Display = () => {
  // --------create background grandient---------
  ////use useRef hook....
   const displayRef = useRef();

  ///use useLocation hook....
   const location = useLocation();
  ///console.log(location);
   const isAlbum = location.pathname.includes("album");
  ///console.log(isAlbum);
   const albumId = isAlbum ? location.pathname.slice(-1) : "";
  ///console.log(albumId);
   const colorBg = albumsData[Number(albumId)].bgColor;
  ///console.log(colorBg);

  /////use useEffect hook....
   useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${colorBg}, #121212)`
    }
    else{
        displayRef.current.style.background = `#121212`

    }
   })


  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#1b1b1b] text-white overflow-auto lg:w-[75%] lg:ml-0"  >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
