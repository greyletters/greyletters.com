import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";

export const runtime = "edge";

export default function Blog() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                <span className="text-white">The </span>
                <span className="text-neon-primary">Blog</span>
            </h1>

            <div className="max-w-2xl mx-auto">
                <GlowCard className="text-center">
                    <div className="py-12 space-y-6">
                        <p className="text-6xl font-mono text-neon-primary font-bold">
                            5.12
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
        </Container>
    );
}
