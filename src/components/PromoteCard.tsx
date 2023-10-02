"use client";

import { useWindowListener } from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-[#ffffff] flex flex-row">
      <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={isPlaying} />
      <div className="text-black m-2 relative">
        Get your vaccine today
        <button
          className="absolute rounded bg-white text-[#3B88D2] border-[#3B88D2] font-semibold py-2 px-2 hover:bg-[#3B88D2] hover:text-white hover:border-transparent bottom-0 left-0 w-[60%]"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
