import Container from "@/components/Container";
import Link from "next/link";
import entries from "@/content/journal/entries.json";
import { notFound } from "next/navigation";

export const runtime = "edge";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function JournalEntry({ params }: PageProps) {
    const { slug } = await params;
    const entry = entries.find((e) => e.slug === slug);

    if (!entry) {
        notFound();
    }

    return (
        <Container className="py-20">
            <Link
                href="/journal"
                className="inline-block mb-8 text-sm text-text-dim hover:text-neon-secondary transition-colors"
            >
                &larr; Back to Journal
            </Link>

            <article className="max-w-3xl mx-auto">
                <header className="mb-12 text-center border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                        {entry.title}
                    </h1>
                    <time className="text-neon-primary font-mono text-sm">
                        {entry.date}
                    </time>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed font-mono">
                    {entry.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>
        </Container>
    );
}

export async function generateStaticParams() {
    return entries.map((entry) => ({
        slug: entry.slug,
    }));
}
