'use client';

import { motion } from 'framer-motion';

interface PastoralMessageProps {
    dictionary: {
        about: {
            title: string;
            description: string | string[];
        };
    };
}

export function PastoralMessage({ dictionary }: PastoralMessageProps) {
    return (
        <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-background">
            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[2rem] transform rotate-3" />
                            <div className="absolute -inset-4 bg-border/20 rounded-[2rem] transform -rotate-2" />

                            <img
                                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
                                alt="Community"
                                className="relative rounded-[1.5rem] shadow-2xl w-full h-[400px] sm:h-[500px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Decorative Quote-like element */}
                            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-card p-6 rounded-xl shadow-xl border border-border/50 max-w-[200px] hidden md:block">
                                <p className="text-sm font-medium text-primary italic">
                                    &quot;Amar a Dios y amar a las personas&quot;
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-6">
                            {dictionary.about.title}
                        </span>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tight leading-[1.1]">
                            {dictionary.about.title === "Quienes Somos" ? "Una Comunidad de Fe" : dictionary.about.title}
                        </h2>

                        <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                            {Array.isArray(dictionary.about.description) ? (
                                dictionary.about.description.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className={index === 0 ? "text-foreground font-normal first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none" : ""}
                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                    />
                                ))
                            ) : (
                                <p>{dictionary.about.description}</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
