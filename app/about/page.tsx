import Container from "@/components/Container";
import GlowCard from "@/components/GlowCard";

export default function About() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                <span className="text-white">About </span>
                <span className="text-neon-primary">Greyletters</span>
            </h1>

            <div className="max-w-2xl mx-auto space-y-8">
                <GlowCard>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Greyletters is an anonymous collective of thoughts, a digital sanctuary for the weary.
                        We exist in the spaces between the noise, documenting the pressure of modern existence.
                    </p>
                </GlowCard>

                <div className="prose prose-invert max-w-none text-text-dim">
                    <p>
                        We are not influencers. We are not selling a lifestyle. We are simply observing
                        the cracks in the facade of a society that demands perfection at the cost of humanity.
                    </p>
                    <p>
                        Here, you will find reflections on burnout, the education system, the corporate grind,
                        and the silent struggles we all share but rarely speak of.
                    </p>
                </div>
            </div>
        </Container>
    );
}
