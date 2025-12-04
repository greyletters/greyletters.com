import Container from "@/components/Container";
import Image from "next/image";

export const runtime = "edge";

export default function ModernSlavery() {
    return (
        <Container className="py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center tracking-tighter">
                <span className="text-neon-accent">MODERN</span> <span className="text-white">SLAVERY</span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
                <Image
                    src="/modern-slavery.png"
                    alt="Breaking chains - Modern Slavery"
                    width={800}
                    height={450}
                    className="w-full rounded-lg border border-white/10"
                    priority
                />
            </div>

            <article className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-text-muted">
                <p>
                    Modern slavery is not something dramatic. It is not screaming or violence or chains. It is the slow, quiet pressure that eats people alive while they pretend they are fine. It is waking up already tired and going to bed even more tired. It is working from nine in the morning until nine at night just so you can afford a place to sleep and some food on the table. It is giving away your entire day, every day, and acting like that is normal. And the worst part is that I am still young and I already feel it tightening around my life like a fist.
                </p>

                <p>
                    I am Gen Z. I grew up being told to work hard, study hard, dream big. But the truth is that this world hits harder and faster than anyone ever prepared us for. We are walking into adulthood already exhausted. Already burnt out. Already behind. Prices rise faster than wages. Rent climbs like a joke. Food gets more expensive every month. Bills stack up like someone is punishing you for trying to stay alive. And it does not matter how hard you work. It never feels like enough.
                </p>

                <p>
                    But it is not just my generation. Older generations feel this too. Millennials are drowning under housing costs and burnout. Gen X pretends they are fine but they carry their own silent shit. Even Boomers feel the weight of a world that changed faster than they could keep up with. They have it differently, maybe a bit easier in some ways, but they still feel the pressure. Nobody is truly safe from it. The difference is that Gen Z is hitting this wall the earliest and will pay for it the longest.
                </p>

                <div className="p-6 bg-white/5 border-l-2 border-neon-accent rounded-r-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">The Physical Effects</h2>
                    <p>
                        The effects creep into your body in ways you do not expect. Stress fucks up everything. Your skin breaks out for no reason. Redness, swelling, acne that should not exist in your twenties. Your hair starts to thin. Your chest tightens in the middle of a normal day. Your stomach twists at random because your digestion has been wrecked by stress hormones. You forget to eat or you eat too much because you are trying to fill some hole you cannot even describe. You cannot sleep properly. You wake up at night for no reason. Your brain will not shut up even when your body begs for rest.
                    </p>
                </div>

                <div className="p-6 bg-white/5 border-l-2 border-neon-primary rounded-r-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">The Mental Effects</h2>
                    <p>
                        And then come the mental effects. The ones nobody wants to admit. You get irritated easily. You lose patience. You zone out in conversations. You stop feeling excitement. You answer messages late because you do not have the energy. You tell people you are fine because explaining the truth feels like too much work. You stop dreaming. You stop planning. You stop thinking about the future because the present is already more than you can handle.
                    </p>
                </div>

                <p>
                    Relationships suffer too. You stop showing up because you are too tired. You cancel plans. You become distant. You start feeling guilty for being exhausted. You want to talk about what is bothering you, but you are afraid of sounding dramatic or weak. So you keep everything inside and hope it will fix itself. It never does. It just sits there, getting heavier.
                </p>

                <p>
                    Romantic relationships get hit even harder. You want to love someone the right way, but you barely have energy for yourself. You feel like you are not enough. You feel guilty for not being present. You feel like you are falling behind in every part of life. Friendships slip away because you cannot keep up. Family gets the leftover version of you. Everyone gets pieces of you, but nobody gets the whole you because the whole you is tired.
                </p>

                <p>
                    The future becomes something you do not think about. Buying a home feels like a fantasy. Building a career feels like a fight that never ends. Starting a family feels impossible when you can barely manage your own life. You start to believe that maybe this is all there is. <span className="text-white font-medium">Work. Survive. Repeat.</span> And you hate that thought, but you cannot get rid of it.
                </p>

                <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                    <h2 className="text-2xl font-bold text-neon-secondary mb-4">A Global Problem</h2>
                    <p>
                        This is happening in every country, just in different ways. In the USA people carry debt like a curse from the moment they turn eighteen. In Japan people collapse on trains because they have nothing left to give. In Czechia people spend all day working and all night worrying about how much more expensive everything will be next month. It hits differently, but it hits everyone.
                    </p>
                </div>

                <p>
                    We are not designed for this kind of pressure. We are not machines. We are human, and humans break when pushed too far. Not dramatically. Not all at once. Slowly. Quietly. In small ways that pile up until you barely recognize yourself.
                </p>

                <p>
                    People always say that every generation has it hard. And that is true. But this one is different. The pace is faster. The expectations are higher. The costs are higher. The safety nets are weaker. Gen Z is walking into a world where everything is harder, more expensive, more unstable, more fragile. And we are expected to smile through it while older generations say they had it tough too. Maybe they did. But this is a different kind of tough. A quiet suffocation. A constant pressure. A world that demands everything and gives almost nothing back.
                </p>

                <p className="text-white">
                    Modern slavery is not about someone owning your body. It is about the world owning your time, your energy, your health, your mind. It is about living your life around a job instead of working your job around your life. It is about being scared to slow down because slowing down means falling behind. It is about being twenty something and already feeling worn out, already feeling like you missed something important, already feeling like you are running out of time even though your life just started.
                </p>

                <div className="pt-8 border-t border-white/10">
                    <p className="italic text-text-dim">
                        I am writing this because I need a place where I can say it honestly. No pretending. No filters. No bullshit. Greyletters is the only space where I can put all of this without feeling like I am bothering someone or being dramatic. If you read this and it feels familiar, then you already know how real it is. And you know you are not imagining it. You are not weak. You are not failing.
                    </p>
                    <p className="mt-6 text-xl text-neon-accent font-medium">
                        The world is simply too heavy. And people like us feel it the most.
                    </p>
                </div>
            </article>
        </Container>
    );
}
