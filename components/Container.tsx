import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn("max-w-4xl mx-auto px-6 sm:px-8 w-full", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
