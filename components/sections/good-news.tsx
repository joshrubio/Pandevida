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

export function GoodNews({ dictionary }: SpiritualJourneySectionProps) {
    if (!dictionary.spiritualJourney) return null;

    return (
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-background" id="good-news">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        {dictionary.spiritualJourney.title}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                        {dictionary.spiritualJourney.title}
                    </h2>
                </motion.div>

                {/* Questions Grid */}
                {dictionary.spiritualJourney.questions.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                        {dictionary.spiritualJourney.questions.map((question, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-card hover:bg-card/80 p-8 rounded-2xl border border-border/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {index === 0 && <Heart className="h-6 w-6" />}
                                    {index === 1 && <Users className="h-6 w-6" />}
                                    {index >= 2 && <BookOpen className="h-6 w-6" />}
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                                    {question}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Message Flow - Timeline Style */}
                <div className="relative space-y-12 md:space-y-16 pl-6 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-border to-primary/0 md:-translate-x-1/2" />

                    {dictionary.spiritualJourney.message.map((paragraph, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Point */}
                            <div className="absolute left-[-29px] md:left-1/2 top-2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 shadow-sm" />

                            {/* Content */}
                            <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                <div className="group relative p-6 md:p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40 hover:bg-card/60 transition-colors">
                                    <span className="absolute -top-4 left-6 md:left-auto md:right-auto px-2 py-1 bg-background text-xs font-mono text-muted-foreground border rounded">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <p
                                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                    />
                                </div>
                            </div>

                            {/* Spacer for alternate side */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full text-lg h-14 px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <a href="#contact">
                                {dictionary.spiritualJourney.cta}
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
