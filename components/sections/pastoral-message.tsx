'use client';

import { motion } from 'framer-motion';

interface PastoralMessageProps {
    dictionary: {
        about: {
            title: string;
            description: string;
        };
    };
}

export function PastoralMessage({ dictionary }: PastoralMessageProps) {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.1]" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-secondary to-primary/20 rounded-2xl transform -rotate-2" />
                            <img
                                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
                                alt="Community"
                                className="relative rounded-xl shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-primary">
                            {dictionary.about.title}
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {dictionary.about.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
