"use client";
import { useRef, useState, useEffect } from "react";
import { Info, Volume2, VolumeX } from "lucide-react";


export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const duration = 240;
  const rangeRef = useRef<HTMLInputElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(50);
  const [dragging, setDragging] = useState(false);

  const toggleMute = () => {
    if (muted || volume === 0) {
      // unmute: restore last volume
      setVolume(lastVolume > 0 ? lastVolume : 50);
      setMuted(false);
    } else {
      // mute: store current volume
      setLastVolume(volume);
      setVolume(0);
      setMuted(true);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying((prev) => !prev);
    // if (audio) {
    //   if (audio.paused) {
    //     audio.play();
    //     setIsPlaying((prev) => !prev);
    //   } else {
    //     audio.pause();
    //     setIsPlaying((prev) => !prev);
    //   }
    // }
  };

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    if (val > 0) {
      setLastVolume(val);
      setMuted(false);
    } else {
      setMuted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // Calculate thumb position in %
  const getThumbPosition = () => {
    if (!rangeRef.current) return 0;
    const min = Number(rangeRef.current.min || 0);
    const max = Number(rangeRef.current.max || 100);
    return ((progress - min) / (max - min)) * 100;
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
    <div className="relative flex items-center bg-white dark:bg-[#333333] border-1 border-gray-300 dark:border-0 shadow-lg rounded-md w-full max-w-md space-x-2 overflow-hidden p-2">
        <div className="flex-1">
            <div className="relative flex gap-2">
                
                {/* Album Art */}
                <div className="relative w-10 h-10 group">
                    <img className="rounded-sm w-full h-full object-cover transition duration-200 group-hover:brightness-50" src="/Folder.jpg" alt="" />

                    <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 cursor-pointer"
                    >
                        {isPlaying ? (
                        // Pause icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 4h4v16H6zm8 0h4v16h-4z"
                                />
                            </svg>
                        ) : (
                            // Play icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 3v18l15-9L5 3z"
                                />
                            </svg>
                        )}
                    </button>
                
                </div>
                
                <div className="flex-1 space-y-0">
                    <p className="text-[0.7rem] font-semibold text-gray-800 dark:text-gray-100 cursor-pointer w-fit">
                        Song Title
                    </p>
                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400 cursor-pointer w-fit">
                        Artist Name
                    </p>
                </div>
                
                <div className="flex-0 relative hidden sm:block">
                    <div className="flex w-fit space-x-2">
                        {/* Volume percentage when dragging */}
                        {dragging && (
                            <div className="absolute top-0 left-0 text-xs text-gray-700 dark:text-gray-200">
                                {volume}
                            </div>
                        )}
                        
                        {/* Speaker Icon */}
                        <button
                            onClick={toggleMute}
                            className={`cursor-pointer transition ${
                                dragging ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                        >
                            {muted || volume === 0 ? (
                                <VolumeX className="w-4 h-4 text-black dark:text-white" />
                            ) : (
                                <Volume2 className="w-4 h-4 text-black dark:text-white" />
                            )}
                        </button>

                        {/* Volume Slider */}
                        <div className="flex items-center">
                          <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={(e) => handleVolumeChange(Number(e.target.value))}
                              onMouseDown={() => setDragging(true)}
                              onMouseUp={() => setDragging(false)}
                              onTouchStart={() => setDragging(true)}
                              onTouchEnd={() => setDragging(false)}
                              style={{ "--progress": `${volume}%` } as React.CSSProperties}
                              className="
                                  w-20
                                  h-1    /* thin slider */
                                  appearance-none
                                  cursor-pointer

                                  /* Firefox */
                                  [&::-moz-range-thumb]:appearance-none
                                  [&::-moz-range-thumb]:w-0
                                  [&::-moz-range-thumb]:h-0

                                  [&::-moz-range-progress]:h-0.5
                                  [&::-moz-range-progress]:bg-black
                                  dark:[&::-moz-range-progress]:bg-white
                                  [&::-moz-range-progress]:rounded-full

                                  /* Chrome, Safari, Edge */
                                  [&::-webkit-slider-thumb]:appearance-none
                                  [&::-webkit-slider-thumb]:w-0
                                  [&::-webkit-slider-thumb]:h-0
                                  [&::-webkit-slider-thumb]:rounded-full
                                  [&::-webkit-slider-thumb]:border-none

                                  [&::-webkit-slider-runnable-track]:h-0.5
                                  [&::-webkit-slider-runnable-track]:rounded-full
                                  [&::-webkit-slider-runnable-track]:[background:linear-gradient(to_right,black_0%,black_var(--progress),transparent_var(--progress),transparent_100%)]
                                  dark:[&::-webkit-slider-runnable-track]:[background:linear-gradient(to_right,white_0%,white_var(--progress),transparent_var(--progress),transparent_100%)]"
                          />
                        </div>

                        {/* Information button */}
                        <button className="flex items-center text-gray-700 dark:text-gray-200 cursor-pointer">
                            <Info className="w-4 h-4" />
                        </button>
                    </div>
                    
                    {/* Timestamp */}
                    <div className="absolute bottom-0 right-0 text-[0.6rem] font-medium text-gray-700 dark:text-gray-200">
                        {formatTime(progress)}
                    </div>
                </div>
            </div>
            {/* Progress Bar */}
            <input
                type="range"
                ref={rangeRef}
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                style={{ "--progress": `${progress}%` } as React.CSSProperties}
                className="
                    absolute
                    h-0
                    w-full
                    bottom-0
                    left-0
                    appearance-none
                    cursor-pointer

                    /* Firefox */
                    [&::-moz-range-thumb]:appearance-none
                    [&::-moz-range-thumb]:bg-black
                    [&::-moz-range-thumb]:w-0
                    [&::-moz-range-thumb]:h-0
                    [&::-moz-range-thumb]:border-none

                    [&::-moz-range-track]:h-4
                    [&::-moz-range-track]:bg-transparent

                    [&::-moz-range-progress]:h-1
                    hover:[&::-moz-range-progress]:h-1.5
                    [&::-moz-range-progress]:bg-black
                    [&::-moz-range-progress]:dark:bg-white
                    [&::-moz-range-progress]:rounded-full

                    /* Chrome, Safari, Edge */
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-0
                    [&::-webkit-slider-thumb]:h-0
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:border-none

                    [&::-webkit-slider-runnable-track]:h-1
                    [&::-webkit-slider-runnable-track]:rounded-full
                    hover:[&::-webkit-slider-runnable-track]:h-1.5
                    [&::-webkit-slider-runnable-track]:[background:linear-gradient(to_right,black_0%,black_var(--progress),transparent_var(--progress),transparent_100%)]
                    dark:[&::-webkit-slider-runnable-track]:[background:linear-gradient(to_right,white_0%,white_var(--progress),transparent_var(--progress),transparent_100%)]"
            />

        </div>
    </div>
    
  );
}
