import Container from "@/components/Container";
import Image from "next/image";

export const runtime = "edge";

export default function Suicide() {
    return (
        <Container className="py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center tracking-tighter text-white/90">
                SUICIDE
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
                <Image
                    src="/suicide-hope.png"
                    alt="Hope - Breaking free"
                    width={800}
                    height={450}
                    className="w-full rounded-lg border border-white/10"
                    priority
                />
            </div>

            <article className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-text-muted">
                <p>
                    This is a topic straight out of Greyletters. <span className="text-white">Suicide.</span><br />
                    And if there is any place where I refuse to hold back, it&apos;s here.<br />
                    This page is the one place where honesty isn&apos;t punished, where anger isn&apos;t silenced, where the truth isn&apos;t watered down to protect the feelings of people who never cared in the first place.
                </p>

                <p>
                    Most people treat suicide like a forbidden word because it forces them to confront everything they don&apos;t want to see.<br />
                    It forces them to look at the world they helped build.<br />
                    It forces them to admit that people don&apos;t break in isolation.<br />
                    They break inside systems that were never built to hold them.
                </p>

                <div className="p-6 bg-neon-secondary/10 border border-neon-secondary/30 rounded-lg my-8">
                    <p className="text-neon-secondary font-medium">
                        This is not a page with methods.<br />
                        There will never be anything like that here.<br />
                        This is a place to talk about the weight that leads people to the edge, not about anything that pushes them further.<br />
                        If you came here expecting anything harmful, you will find nothing.
                    </p>
                    <p className="text-white font-bold mt-4">
                        But if you came here for the truth, then stay.
                    </p>
                </div>

                <p className="text-white text-xl">
                    Because the truth is this.<br />
                    <span className="text-neon-accent font-bold">Suicide is not cowardly.</span><br />
                    I have never believed that lie for a single second.
                </p>

                <p>
                    People say it because they are terrified to admit that the world they live in is vicious enough to crush a person from the inside.<br />
                    Calling it cowardly is a way for society to dodge accountability.<br />
                    It&apos;s easier to blame an individual than to confront an entire system that creates despair like a factory creates products.
                </p>

                <div className="p-6 bg-white/5 border-l-2 border-neon-accent rounded-r-lg">
                    <p>
                        Behind so many suicides is not cowardice but <span className="text-white">pain</span>.<br />
                        Long pain.<br />
                        Deep pain.<br />
                        Pain carried quietly because the world punishes anyone who dares to show it.<br />
                        Pain ignored by families.<br />
                        Pain dismissed by friends.<br />
                        Pain that workplaces exploit.<br />
                        Pain that governments pretend doesn&apos;t exist because acknowledging it would mean admitting their failure.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-neon-primary pt-8">Let&apos;s talk about that failure.</h2>

                <p>
                    Governments love pretending suicide is just a personal tragedy.<br />
                    They love offering thoughts and prayers while cutting mental health funding.<br />
                    They love talking about awareness while people wait months just to talk to a therapist.<br />
                    They love launching campaigns instead of solutions.<br />
                    They love saying <span className="text-white italic">&quot;we care&quot;</span> while refusing to fix anything that kills people from the inside.
                </p>

                <p>
                    If governments actually cared, mental health wouldn&apos;t be a luxury.<br />
                    If they cared, people wouldn&apos;t have to beg for help.<br />
                    If they cared, getting support wouldn&apos;t feel like fighting a war while already bleeding.<br />
                    <span className="text-neon-accent">But they don&apos;t care.</span><br />
                    They never have.<br />
                    They care about numbers, budgets, elections, optics.<br />
                    Human suffering is an afterthought unless it fits their narrative.
                </p>

                <h2 className="text-3xl font-bold text-neon-primary pt-8">And corporations</h2>

                <p>
                    I don&apos;t even know where to begin.<br />
                    They talk about wellbeing like it&apos;s a brand identity.<br />
                    They host workshops about mental resilience while actively destroying the resilience their employees have left.<br />
                    They love words like <span className="text-white">family</span> and <span className="text-white">support</span> and <span className="text-white">community</span>, until their numbers drop, and suddenly the same human beings become disposable assets.
                </p>

                <p>
                    Corporations turn humans into statistics.<br />
                    They drain people mentally, emotionally, physically.<br />
                    They feed burnout like it&apos;s a norm and then blame the person who collapses.<br />
                    They pretend to care only when it&apos;s profitable.
                </p>

                <div className="p-6 bg-white/5 border border-white/10 rounded-lg my-8">
                    <p className="text-white font-medium">
                        But the most cowardly part of all is the silence.<br />
                        The silence from people in power.<br />
                        The silence from institutions that should have protected the vulnerable.<br />
                        The silence from leaders who only show up when it is convenient for them.<br />
                        They hide behind statements, behind excuses, behind policies that do nothing.
                    </p>
                </div>

                <p>
                    Suicide rates rise every year and all they deliver is a press release.<br />
                    No action.<br />
                    No urgency.<br />
                    No investment.<br />
                    Just empty language designed to calm the public while nothing changes.
                </p>

                <div className="my-12">
                    <Image
                        src="/suicide-stats.png"
                        alt="WHO Global Suicide Rates Statistics"
                        width={800}
                        height={500}
                        className="w-full rounded-lg border border-white/10"
                    />
                    <p className="text-sm text-text-dim mt-2 text-center">Source: World Health Organization</p>
                </div>

                <p className="text-xl text-white">
                    And then society dares to blame the person who breaks.
                </p>

                <div className="p-6 bg-neon-primary/10 border border-neon-primary/30 rounded-lg">
                    <p className="text-white">
                        People who think about suicide are not weak.<br />
                        They are not dramatic.<br />
                        They are not failures.<br />
                        They are human beings crushed under pressure that no one was meant to withstand.<br />
                        They are carrying a lifetime of emotions that were never safe to express.<br />
                        They are fighting battles that others refused to see.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-neon-secondary pt-8">Gen Z</h2>

                <p>
                    I am part of Gen Z, and I grew up in a world already collapsing under its own weight.<br />
                    We learned early that adults don&apos;t know how to talk about pain.<br />
                    We learned that governments don&apos;t protect us.<br />
                    We learned that workplaces don&apos;t care about us.<br />
                    We learned that mental health help is something you get only if you&apos;re lucky or rich.<br />
                    We learned that everyone says <span className="text-white italic">&quot;talk to someone&quot;</span> but nobody teaches people how to listen.<br />
                    We learned that silence is more common than support.
                </p>

                <p className="text-white font-medium">
                    And we are supposed to hold everything together in a world that is falling apart around us.
                </p>

                <div className="p-6 bg-neon-accent/10 border-l-4 border-neon-accent rounded-r-lg my-8">
                    <p className="text-white">
                        If anyone here is cowardly<br />
                        it is not the person who reaches the breaking point<br />
                        <span className="text-neon-accent">it is the institutions that let them fall</span><br />
                        <span className="text-neon-accent">it is the leaders who look away</span><br />
                        <span className="text-neon-accent">it is the companies that profit from pain</span><br />
                        <span className="text-neon-accent">it is the governments that fail to act</span><br />
                        <span className="text-neon-accent">it is the society that prefers judgement over understanding</span>
                    </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-xl text-text-muted">
                        People do not think about suicide because they want to die.<br />
                        They think about it because they want the pain to stop.<br />
                        Because the pressure becomes unbearable.<br />
                        Because the silence becomes louder than their own heartbeat.<br />
                        Because they were left alone in a world that claims to care but rarely proves it.
                    </p>
                </div>
            </article>
        </Container>
    );
}
