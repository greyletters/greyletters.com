import React from "react";

interface HoloTextProps {
    children: React.ReactNode;
    className?: string;
}

const HoloText: React.FC<HoloTextProps> = ({ children, className = "" }) => {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {children}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-neon-primary opacity-50 blur-[2px] animate-pulse">
                {children}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-neon-secondary opacity-30 blur-[4px] translate-x-[2px]">
                {children}
            </span>
        </span>
    );
};

export default HoloText;
