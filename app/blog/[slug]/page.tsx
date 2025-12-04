import Container from "@/components/Container";
import Link from "next/link";
import posts from "@/content/blog/posts.json";
import { notFound } from "next/navigation";

export const runtime = "edge";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <Container className="py-20">
            <Link
                href="/blog"
                className="inline-block mb-8 text-sm text-text-dim hover:text-neon-primary transition-colors"
            >
                &larr; Back to Blog
            </Link>

            <article className="max-w-3xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {post.title}
                    </h1>
                    <time className="text-neon-secondary font-mono text-sm">
                        {post.date}
                    </time>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                    {post.content.split('\n\n').map((paragraph, index) => (
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
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
