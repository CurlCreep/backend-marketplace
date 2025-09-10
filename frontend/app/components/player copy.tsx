"use client";
import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  // Update progress as song plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  // Allow user to scrub
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  return (
    <div className="relative flex items-center bg-white dark:bg-[#363638] shadow-lg rounded-md w-full max-w-md space-x-2 overflow-hidden">
        <div className="flex-1">
            <div className="flex space-x-2">
                {/* Album Art */}
                <div className="w-10 h-10">
                    <img className="rounded-sm cursor-pointer" src="/Folder.jpg" alt="" />
                </div>
                
                <div className="flex-1 space-y-0">
                    <p className="text-[0.7rem] font-semibold text-gray-800 dark:text-gray-100">
                    Song Title
                    </p>
                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400">
                    Artist Name
                    </p>
                </div>
                
            </div>
            <input
                type="range"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="
                    absolute
                    h-0
                    w-full
                    appearance-none
                    cursor-pointer

                    /* Firefox */
                    [&::-moz-range-thumb]:appearance-none
                    [&::-moz-range-thumb]:bg-transparent
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:border-none

                    [&::-moz-range-track]:h-4
                    [&::-moz-range-track]:bg-transparent

                    [&::-moz-range-progress]:h-0.5
                    [&::-moz-range-progress]:bg-black
                    [&::-moz-range-progress]:dark:bg-white
                    [&::-moz-range-progress]:rounded-full"
            />
        </div>
    </div>
    
  );
}
