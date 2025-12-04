import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import Link from "next/link";

export const runtime = "edge";

export default function Contact() {
    return (
        <Container className="py-20 min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-12 text-center text-white">
                Contact
            </h1>

            <div className="w-full max-w-md space-y-6">
                <GlowCard>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-neon-secondary mb-1">Email</h3>
                            <a href="mailto:admin@greyletters.com" className="text-xl text-white hover:text-neon-primary transition-colors">
                                admin@greyletters.com
                            </a>
                        </div>

                        <div className="h-px bg-white/10 my-2" />

                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-neon-secondary mb-1">Bluesky</h3>
                            <Link
                                href="https://bsky.app/profile/greyletters.com"
                                target="_blank"
                                className="text-xl text-white hover:text-neon-primary transition-colors"
                            >
                                @greyletters.com
                            </Link>
                        </div>
                    </div>
                </GlowCard>

                <p className="text-center text-sm text-text-dim">
                    No personal identities. No names. Just the message.
                </p>
            </div>
        </Container>
    );
}
