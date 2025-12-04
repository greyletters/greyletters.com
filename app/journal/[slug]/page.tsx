import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import { notFound } from "next/navigation";
import entriesData from "@/content/journal/entries.json";

interface Entry {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

const entries: Entry[] = entriesData as Entry[];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return entries.map((entry) => ({
        slug: entry.slug,
    }));
}

export default async function JournalEntry({ params }: PageProps) {
    const { slug } = await params;
    const entry = entries.find((e) => e.slug === slug);

    if (!entry) {
        notFound();
    }

    return (
        <Container className="py-20">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <time className="text-neon-accent text-sm">{entry.date}</time>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">
                        {entry.title}
                    </h1>
                </header>

                <GlowCard>
                    <div className="prose prose-invert prose-lg max-w-none">
                        {entry.content.split("\n").map((paragraph, index) => (
                            <p key={index} className="text-text-muted leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </GlowCard>
            </article>
        </Container>
    );
}
