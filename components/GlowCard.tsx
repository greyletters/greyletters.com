import React from "react";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-primary to-neon-secondary rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/80 border border-white/10 rounded-lg p-6 leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GlowCard;
