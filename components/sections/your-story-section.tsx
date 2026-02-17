'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

interface YourStorySectionProps {
    dictionary: {
        yourStory?: {
            title: string;
            description: string;
            cta: string;
            link: string;
        };
        [key: string]: unknown;
    };
}

export function YourStorySection({ dictionary }: YourStorySectionProps) {
    if (!dictionary.yourStory) return null;

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-muted/30">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 shadow-sm">
                        <BookOpen className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        {dictionary.yourStory.title}
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        {dictionary.yourStory.description}
                    </p>

                    <Button
                        size="lg"
                        className="text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                        onClick={() => window.open(dictionary.yourStory?.link, '_blank')}
                    >
                        {dictionary.yourStory.cta}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
