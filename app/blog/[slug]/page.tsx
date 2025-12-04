import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import { notFound } from "next/navigation";
import postsData from "@/content/blog/posts.json";

interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

const posts: Post[] = postsData as Post[];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <Container className="py-20">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <time className="text-neon-secondary text-sm">{post.date}</time>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">
                        {post.title}
                    </h1>
                </header>

                <GlowCard>
                    <div className="prose prose-invert prose-lg max-w-none">
                        {post.content.split("\n").map((paragraph, index) => (
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
