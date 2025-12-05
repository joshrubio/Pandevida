'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

interface BibleReadingProps {
    dictionary: {
        bibleReading?: {
            title: string;
            description: string;
            cta: string;
            link: string;
        };
    };
}

export function BibleReading({ dictionary }: BibleReadingProps) {
    if (!dictionary.bibleReading) return null;

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 text-center shadow-xl"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <BookOpen className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                        {dictionary.bibleReading.title}
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        {dictionary.bibleReading.description}
                    </p>

                    <Button
                        size="lg"
                        className="text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                        onClick={() => window.open(dictionary.bibleReading?.link, '_blank')}
                    >
                        {dictionary.bibleReading.cta}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
