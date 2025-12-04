"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
                <Container className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tighter text-white hover:text-neon-primary transition-colors duration-300"
                    >
                        GREYLETTERS
                    </Link>

                    {/* Desktop Menu */}
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                    </button>
                </Container>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden pt-16 bg-black/95 backdrop-blur-lg"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-6 pb-20">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-2xl font-medium transition-colors duration-300 ${isActive
                                                    ? "text-neon-primary"
                                                    : "text-white hover:text-neon-secondary"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
