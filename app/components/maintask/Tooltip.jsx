"use client"
import React, { useState } from 'react';

const Tooltip = ({ children, tooltipText }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div className="relative inline-block">
            <button
                className=" text-white font-bold py-2 px-4 rounded"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
            </button>
            {showTooltip && (
                <div className="absolute bg-black text-white text-xs rounded p-1 bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-100 pointer-events-auto">
                    {tooltipText}
                    <svg
                        className="absolute text-black h-2 w-full left-1/2 transform -translate-x-1/2 top-full"
                        x="0px"
                        y="0px"
                        viewBox="0 0 255 255"
                        xmlSpace="preserve"
                    >
                        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
