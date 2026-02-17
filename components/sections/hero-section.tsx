'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroSectionProps {
    dictionary: {
        hero: {
            title: string;
            subtitle: string;
            cta: string;
            secondaryCta: string;
        };
    };
}

export function HeroSection({ dictionary }: HeroSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop)' }}
                />
            </motion.div>

            {/* Content */}
            <div className="container relative z-20 text-center px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                        {dictionary.hero.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                        {dictionary.hero.subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
