import Link from "next/link";

export default function AboutMe() {
    return (
        <section className="bg-black px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
                {/* Top: About text */}
                <div className="grid items-start gap-12 md:gap-16 md:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] mb-16">
                    {/* Left column */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 border border-blue-500/40">
                            My story
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            About Me
                        </h2>
                        <p className="text-lg leading-relaxed text-neutral-400">
                            Passionate about creating digital experiences that blend aesthetics
                            with functionality.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-neutral-300">
                            I&apos;m a UI/UX designer &amp; developer who enjoys turning ideas
                            into clear, tangible digital experiences. I like to move between
                            strategy, design and code – from figuring out what users actually
                            need, to shaping the interface, to building it out in a clean,
                            maintainable way. My focus is always on usability, visual clarity
                            and reliable tech, so the things I make not only look good but are
                            also fast, accessible and pleasant to use. Over the past years
                            I&apos;ve worked on branding, product design, front-end
                            development and backend systems – which helps me bridge the gap
                            between designers, developers and stakeholders.
                        </p>

                        <button className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3  text-white font-semibold transition-all hover:bg-blue-600 hover:scale-105">
                            Get in Touch
                        </button>
                    </div>
                </div>

                {/* Services – 4 next to each other on md+ */}
                <div className="mt-16 flex flex-col gap-8 pt-8 md:flex-row">
                    {/* UI/UX Design */}
                    <div className="relative flex-1">
                        {/* Blue glow */}
                        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-blue-500/80 via-blue-500/5 to-transparent blur-3xl opacity-90" />
                        {/* Card */}
                        <div className="rounded-2xl from-slate-900/70 to-black/80 p-8">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg
                                    className="h-12 w-12 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-left text-xl font-semibold text-white">
                                UI/UX Design
                            </h3>
                            <p className="text-left text-sm leading-relaxed text-neutral-400">
                                Crafting intuitive user interfaces with a focus on interaction,
                                visual hierarchy and user flows.
                            </p>
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-blue-500/40 via-blue-500/5 to-transparent blur-3xl opacity-70" />
                        <div className="rounded-2xl from-slate-900/70 to-black/80 p-8">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg
                                    className="h-12 w-12 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9-8.25h13.5A2.25 2.25 0 0 1 21 6v12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V6a2.25 2.25 0 0 1 2.25-2.25Z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-left text-xl font-semibold text-white">
                                Web Development
                            </h3>
                            <p className="text-left text-sm leading-relaxed text-neutral-400">
                                Building responsive, modern web applications with clean,
                                maintainable code and solid performance.
                            </p>
                        </div>
                    </div>

                    {/* User Research */}
                    <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-blue-500/40 via-blue-500/5 to-transparent blur-3xl opacity-70" />
                        <div className="rounded-2xl from-slate-900/70 to-black/80 p-8 ">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg
                                    className="h-12 w-12 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-left text-xl font-semibold text-white">
                                User Research
                            </h3>
                            <p className="text-left text-sm leading-relaxed text-neutral-400">
                                Understanding user needs, behaviours and pain points to make more
                                informed product decisions.
                            </p>
                        </div>
                    </div>

                    {/* Backend Systems */}
                    <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-blue-500/40 via-blue-500/5 to-transparent blur-3xl opacity-70" />
                        <div className="rounded-2xl from-slate-900/70 to-black/80 p-8 ">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <svg
                                    className="h-12 w-12 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-left text-xl font-semibold text-white">
                                Backend Systems
                            </h3>
                            <p className="text-left text-sm leading-relaxed text-neutral-400">
                                Designing and implementing robust APIs and database structures to
                                support the experience end-to-end.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
