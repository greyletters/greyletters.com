"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 mt-20 border-t border-white/5">
            <Container className="flex flex-col items-center justify-center gap-6 text-center">
                <p className="text-text-dim text-sm">
                    © Greyletters {currentYear}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-muted">
                    <a
                        href="mailto:admin@greyletters.com"
                        className="hover:text-neon-secondary transition-colors"
                    >
                        admin@greyletters.com
                    </a>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <a
                        href="https://bsky.app/profile/greyletters.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neon-secondary transition-colors"
                    >
                        Bluesky
                    </a>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <Link
                        href="/privacypolicy"
                        className="hover:text-neon-secondary transition-colors"
                    >
                        Privacy Policy
                    </Link>
                </div>

                <p className="text-xs text-text-dim/50 italic">
                    No other social networks are used.
                </p>

                <div className="pt-4 border-t border-white/5 w-full max-w-md">
                    <p className="text-xs text-text-dim">
                        This website is{" "}
                        <span className="text-neon-secondary">open source</span>
                    </p>
                    <a
                        href="https://github.com/greyletters/greyletters.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neon-primary hover:text-neon-secondary transition-colors"
                    >
                        github.com/greyletters/greyletters.com
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
