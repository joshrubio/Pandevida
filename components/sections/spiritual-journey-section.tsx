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
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container px-4 sm:px-6 md:px-8">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {dictionary.spiritualJourney.questions.map((question, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-6 rounded-xl shadow-sm border border-border/50 text-center"
                            >
                                <div className="mb-4 flex justify-center">
                                    {index === 0 && <Heart className="h-8 w-8 text-primary" />}
                                    {index === 1 && <BookOpen className="h-8 w-8 text-primary" />}
                                    {index === 2 && <Users className="h-8 w-8 text-primary" />}
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

                    {/* Prayer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8 text-center"
                    >
                        <p className="text-base md:text-lg italic text-foreground/80 leading-relaxed">
                            {dictionary.spiritualJourney.prayer}
                        </p>
                    </motion.div>

                    <div className="text-center">
                        <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full">
                            {dictionary.spiritualJourney.cta}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
