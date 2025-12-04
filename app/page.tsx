import Container from "@/components/Container";
import HoloText from "@/components/HoloText";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <Container>
                <div className="space-y-12 animate-float">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-center font-display">
                        <HoloText>GREYLETTERS</HoloText>
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl text-text-muted leading-relaxed">
                        <p>
                            Greyletters is the place where I say the things I never say out loud.
                            The thoughts that sit in my head too long and start to feel heavy.
                            I act normal around people, but most of the time it is just me trying not to show what is actually going on underneath.
                        </p>

                        <p>
                            I write here because I need somewhere to put all of it.
                            The <span className="text-neon-accent">pressure</span>, the <span className="text-neon-accent">burnout</span>, the <span className="text-neon-accent">frustration</span>, the moments that hit harder than they should.
                            It is not dramatic, it is just real life.
                            The part people hide because pretending everything is fine is easier than explaining why it is not.
                        </p>

                        <p className="pl-6 border-l-2 border-neon-primary text-white italic">
                            I keep this anonymous because it feels safer.
                            When nobody knows who I am, I can finally be honest.
                            No judgement, no expectations, no pretending.
                        </p>

                        <p>
                            Greyletters is the part of me I do not show anywhere else.
                            The tired part, the confused part, the part that tries to make sense of things that keep piling up.
                            Writing it down is the only way it stops spinning in my head.
                        </p>

                        <p className="text-white font-medium">
                            This is me without the mask.<br />
                            This is what I never say face to face.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                        <Link
                            href="/blog"
                            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 border border-neon-primary rounded-full shadow-[0_0_15px_rgba(127,91,255,0.3)] group-hover:shadow-[0_0_25px_rgba(127,91,255,0.6)] transition-all duration-300" />
                            <div className="absolute inset-0 bg-neon-primary/10 group-hover:bg-neon-primary/20 transition-all duration-300" />
                            <span className="relative text-neon-primary font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors">
                                Read Blog
                            </span>
                        </Link>

                        <Link
                            href="/journal"
                            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 border border-neon-secondary rounded-full shadow-[0_0_15px_rgba(91,255,230,0.3)] group-hover:shadow-[0_0_25px_rgba(91,255,230,0.6)] transition-all duration-300" />
                            <div className="absolute inset-0 bg-neon-secondary/10 group-hover:bg-neon-secondary/20 transition-all duration-300" />
                            <span className="relative text-neon-secondary font-bold tracking-widest uppercase text-sm group-hover:text-black transition-colors">
                                Open Journal
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
