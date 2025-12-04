import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import Link from "next/link";
import entries from "@/content/journal/entries.json";

export const runtime = "edge";

export default function Journal() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                <span className="text-white">The </span>
                <span className="text-neon-secondary">Journal</span>
            </h1>

            <div className="grid gap-8">
                {entries.map((entry) => (
                    <Link key={entry.slug} href={`/journal/${entry.slug}`} className="block group">
                        <GlowCard className="h-full transition-transform duration-300 group-hover:-translate-y-1 border-neon-secondary/20">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold text-white group-hover:text-neon-secondary transition-colors">
                                        {entry.title}
                                    </h2>
                                    <span className="text-sm text-neon-primary font-mono">
                                        {entry.date}
                                    </span>
                                </div>
                                <p className="text-text-muted mb-6 flex-grow font-mono text-sm">
                                    {entry.excerpt}
                                </p>
                                <div className="text-sm text-neon-secondary uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                                    Open Entry &rarr;
                                </div>
                            </div>
                        </GlowCard>
                    </Link>
                ))}
            </div>
        </Container>
    );
}
