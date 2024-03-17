"use client"
import React, { useRef, useState } from 'react';
import { FaCirclePlay, FaRepeat } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";

const AudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeatOn, setIsRepeatOn] = useState(false);
    const audioRef = useRef(new Audio(audioSrc));

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleRepeat = () => {
        setIsRepeatOn(!isRepeatOn);
    };
    return (
        <div className="flex items-center justify-start text-black">
            <button className="mr-2" onClick={togglePlay}>
                {isPlaying ? <FaPauseCircle className='text-[#1FA45B] text-[50px]' /> : <FaCirclePlay className='text-[#1FA45B] text-[50px]' />}
            </button>
            <button onClick={toggleRepeat}>
                {isRepeatOn ? <FaRepeat className='text-[#8f8f8f]' /> : <FaRepeat />}
            </button>
            {isRepeatOn && <audio ref={audioRef} src={audioSrc} loop />}
        </div>
    );
};

export default AudioPlayer;