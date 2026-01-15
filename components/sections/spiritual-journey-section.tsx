'use client';

import { motion } from 'framer-motion';
import { Heart, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpiritualJourneySectionProps {
    dictionary: {
        spiritualJourney?: {
            title: string;
            questions: string[];
            message: string[];
            prayer: string;
            cta: string;
        };
    };
}

export function SpiritualJourneySection({ dictionary }: SpiritualJourneySectionProps) {
    if (!dictionary.spiritualJourney) return null;

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.1]" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
                            {dictionary.spiritualJourney.title}
                        </h2>
                    </motion.div>

                    {/* Questions */}
                    <div className={`grid grid-cols-1 ${dictionary.spiritualJourney.questions.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 md:gap-8 mb-12`}>
                        {dictionary.spiritualJourney.questions.map((question, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/50 text-center hover:shadow-md transition-all duration-300"
                            >
                                <div className="mb-4 flex justify-center">
                                    {index === 0 && <Heart className="h-8 w-8 text-primary" />}
                                    {index === 1 && <BookOpen className="h-8 w-8 text-primary" />}
                                    {index >= 2 && <Users className="h-8 w-8 text-primary" />}
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {question}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-6 mb-10 text-center max-w-3xl mx-auto"
                    >
                        {dictionary.spiritualJourney.message.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base md:text-lg text-foreground/90 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>



                    <div className="text-center">
                        <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all">
                            {dictionary.spiritualJourney.cta}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
