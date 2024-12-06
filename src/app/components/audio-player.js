"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

export default function AudioPlayer({ autoplay = false }) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      if (autoplay) {
        audio.play();
      }
    }
  }, [autoplay]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlay}
        className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30"
      >
        {isPlaying ? (
          <Music2 className="h-6 w-6 text-white" />
        ) : (
          <Music className="h-6 w-6 text-white" />
        )}
      </button>
      <audio ref={audioRef} src="/backsound-1.mp3" loop preload="auto" />
    </div>
  );
}
