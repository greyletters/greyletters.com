import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";
import Link from "next/link";
import posts from "@/content/blog/posts.json";

interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

const typedPosts: Post[] = posts as Post[];

export default function Blog() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                <span className="text-white">The </span>
                <span className="text-neon-primary">Blog</span>
            </h1>

            {typedPosts.length === 0 ? (
                <div className="max-w-2xl mx-auto">
                    <GlowCard className="text-center">
                        <div className="py-12 space-y-6">
                            <p className="text-6xl font-mono text-neon-primary font-bold">
                                Soon
                            </p>
                            <p className="text-2xl text-white">
                                Something is coming.
                            </p>
                            <p className="text-text-muted">
                                The first posts will appear here soon.
                            </p>
                        </div>
                    </GlowCard>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto space-y-8">
                    {typedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <GlowCard className="transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(127,91,255,0.3)]">
                                <article className="space-y-4">
                                    <time className="text-neon-secondary text-sm">
                                        {post.date}
                                    </time>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neon-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-block text-neon-primary text-sm hover:text-neon-secondary transition-colors">
                                        Read more →
                                    </span>
                                </article>
                            </GlowCard>
                        </Link>
                    ))}
                </div>
            )}
        </Container>
    );
}
