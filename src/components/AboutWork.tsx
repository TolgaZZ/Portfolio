export default function AboutWork() {
    return (
        <section className="bg-black px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 flex items-center gap-3">
                    <svg
                        className="h-6 w-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 6h-2V4c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v3h20V8c0-1.11-.89-2-2-2zM8 4h8v2H8V4zM2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-8H2v8z" />
                    </svg>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Work Experience
                    </h2>
                </div>

                    <div className="space-y-20">
                    {/* Timeline container */}
                    <div className="relative pl-6">
                        {/* Vertical line */}
                        <div className="pointer-events-none absolute left-[2.25rem] top-0 bottom-0 w-px bg-slate-800" />

                        {/* --- Experience 1: Order Picker (Luba) --- */}
                        <div className="relative mb-16 flex gap-6">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-blue-600 bg-black" />

                        <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div className="space-y-2">
                            <div className="text-lg font-medium text-blue-500">
                                2025 - Present
                            </div>
                            <h3 className="text-2xl font-semibold text-white">
                                Order Picker (Medical Warehouse)
                            </h3>
                            <p className="text-lg text-neutral-400">Luba</p>
                            </div>

                            <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-white">
                                Medicine logistics
                            </h4>
                            <p className="text-lg leading-relaxed text-neutral-300">
                                Working at Luba in a pharmaceutical warehouse, I walk pick routes,
                                collect medication and prepare orders for shipment from start to
                                finish – picking, checking, labelling and storing. This role taught
                                me to work accurately under time pressure and handle medical
                                products with a high sense of responsibility.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Order Picking
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Attention to Detail
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Medical Logistics
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Working Under Pressure
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* --- Experience 2: Chief Marketing Officer (BYV) --- */}
                        <div className="relative mb-16 flex gap-6">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-blue-600 bg-black" />

                        <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div className="space-y-2">
                            <div className="text-lg font-medium text-blue-500">
                                2024 - 2025
                            </div>
                            <h3 className="text-2xl font-semibold text-white">
                                Chief Marketing Officer
                            </h3>
                            <p className="text-lg text-neutral-400">Build Your Vision</p>
                            </div>

                            <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-white">
                                Brand &amp; product strategy
                            </h4>
                            <p className="text-lg leading-relaxed text-neutral-300">
                                Designed the brand identity and user interfaces for one of the
                                leading HR and recruitment platforms. Focused on creating a cohesive
                                visual language, streamlining the job application experience, and
                                improving usability for both candidates and employers.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Brand Identity
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                UX/UI Design
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Product Strategy
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Marketing Strategy
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* --- Experience 3: Software Development Internship --- */}
                        <div className="relative mb-16 flex gap-6">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-blue-600 bg-black" />

                        <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div className="space-y-2">
                            <div className="text-lg font-medium text-blue-500">
                                2021 - 2022
                            </div>
                            <h3 className="text-2xl font-semibold text-white">
                                Software Development
                            </h3>
                            <p className="text-lg text-neutral-400">Timeless Media</p>
                            </div>

                            <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-white">Internship</h4>
                            <p className="text-lg leading-relaxed text-neutral-300">
                                In this internship at Timeless Media, I applied my academic
                                knowledge, validating its practical relevance. I gained valuable
                                experience in back-end development, Scrum methodologies, Git usage
                                and collaborative coding, discovering that my academic background
                                seamlessly translated into real-world applications.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Backend Development
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Scrum &amp; Agile
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Git &amp; Version Control
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Team Collaboration
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* --- Experience 4: Dirk --- */}
                        <div className="relative flex gap-6">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-blue-600 bg-black" />

                        <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div className="space-y-2">
                            <div className="text-lg font-medium text-blue-500">
                                2016 - 2018
                            </div>
                            <h3 className="text-2xl font-semibold text-white">
                                Warehouse Employee
                            </h3>
                            <p className="text-lg text-neutral-400">Dirk</p>
                            </div>

                            <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-white">
                                Retail experience
                            </h4>
                            <p className="text-lg leading-relaxed text-neutral-300">
                                I worked at Dirk from 2016 to 2018 to build connections and gain
                                experience in working under flexible hours and handling work
                                pressures.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Teamwork
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Working Under Pressure
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Flexibility
                                </span>
                                <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-1 text-sm text-blue-400">
                                Time Management
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>{/* end timeline container */}
                </div>
            </div>
        </section>
    );
}
