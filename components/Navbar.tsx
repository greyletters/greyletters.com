"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Journal", href: "/journal" },
    { name: "Modern Slavery", href: "/modernslavery" },
    { name: "School", href: "/school" },
    { name: "Suicide", href: "/suicide" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
            <Container className="flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-neon-primary transition-colors duration-300">
                    GREYLETTERS
                </Link>
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-neon-primary" : "text-text-muted hover:text-white"
                                    }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-neon-primary shadow-[0_0_10px_#7f5bff]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
