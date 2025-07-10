import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

////createContext API.....
//const PlayerContext = createContext();
////then Export Defaults...
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  ///create a refernce veriable...
  const audioRef = useRef();

  ////create seekbar nd hr tag function .....
  const seekBg = useRef();
  const seekBar = useRef();

  ///create a state veriable to manage the project state...
  const [track, setTrack] = useState(songsData[2]);

  ///when project loaded then the states will be false...
  const [playStatus, setPlayStatus] = useState(false);

  ///for total duration nd current time...
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  ////play or pause the song.....
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  ///for play any song....
  ///so, create a Async function....
  const playWithId = async(id)=>{
      await setTrack(songsData[id]);
      await audioRef.current.play();
      setPlayStatus(true);
  }

  const previous =async()=>{
      if (track.id>0) {
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
  }

  const next =async()=>{
    if (track.id<songsData.length-1) {
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
}

 const seekSong =async(e) =>{
    audioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
 } 


  ////for create song timing....
  useEffect(() => {
    setTimeout(() => {

      audioRef.current.ontimeupdate = () => {
        ///create green bar.....
        seekBar.current.style.width = Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100 )+ "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };   
    }, 1000);
  }, [audioRef]);

  // --------

  ///create a veriable which name is contextValue...
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong ,
  };

  return (
    ///here Provider is a property...
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
