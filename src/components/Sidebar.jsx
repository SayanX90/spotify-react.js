import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
   
  const navigate = useNavigate();


  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#242424] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 cursor-pointer pl-8">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer pl-8">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

    <div className="bg-[#242424] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-5">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

         {/* button */}
        <div className="p-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start  pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </p>
          <button className="px-4 text-black bg-white py-2 rounded-full mt-4 ">Playlist</button>
        </div>

        <div className="p-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start  pl-4">
          <h1>Find some Artist to follow</h1>
          <p className="font-light">
           we will help to find Artist..
          </p>
          <button className="px-4 text-black bg-white py-2 rounded-full mt-4 ">Artist</button>
        </div>
    </div>

    </div>
  );
};

export default Sidebar;
