'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { type Locale } from '@/i18n-config';

interface EvangelisticSectionProps {
    dictionary: {
        evangelistic: {
            title: string;
            description: string;
            cta: string;
        };
    };
    lang: Locale;
}

export function EvangelisticSection({ dictionary, lang }: EvangelisticSectionProps) {
    const ctaLink = lang === 'arabic'
        ? "https://www.youtube.com/watch?v=4LHtk9qu7EM&list=PLE-WJwzRxHRDlNKG63cw4w6rKx31hNgVt&index=1"
        : "https://www.gotquestions.org/Espanol/Quien-es-Jesucristo.html";

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
                    >
                        {dictionary.evangelistic.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 md:mb-10 opacity-90"
                    >
                        {dictionary.evangelistic.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Button asChild size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                                {dictionary.evangelistic.cta}
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
