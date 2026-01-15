'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Video {
    id: string;
    title: string;
    description: string;
    embedUrl: string;
}

interface VideoGalleryProps {
    dictionary: {
        videos: {
            title: string;
            description: string;
            watch: string;
            items: Video[];
        };
    };
}

function VideoSection({ video, index, dictionary }: { video: Video, index: number, dictionary: any }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const isEven = index % 2 === 0;

    // Dynamic background styles
    const bgStyle = isEven
        ? "bg-gradient-to-br from-background via-secondary/5 to-background"
        : "bg-gradient-to-bl from-primary/5 via-background to-secondary/5";

    const pattern = isEven ? "bg-grid-pattern" : "bg-dot-pattern";

    return (
        <section ref={ref} className={`min-h-[80vh] flex items-center justify-center py-20 overflow-hidden relative ${bgStyle}`}>
            {/* Background Pattern */}
            <div className={`absolute inset-0 ${pattern} opacity-[0.05]`} />

            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
            />

            <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    style={{ opacity }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                    {/* Video Column */}
                    <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <motion.div
                            style={{ y }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                        {/* Decorative elements behind video */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-3xl rounded-full opacity-50" />
                    </div>

                    {/* Content Column */}
                    <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-sm"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {video.title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {video.description}
                            </p>
                            <Button size="lg" className="group rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                                <a href={video.embedUrl.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
                                    {dictionary.videos.watch}
                                    <motion.span
                                        className="ml-2"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        →
                                    </motion.span>
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function VideoGallery({ dictionary }: VideoGalleryProps) {
    if (!dictionary.videos.items) return null;

    return (
        <div id="videos" className="bg-background relative">
            <div className="py-20 text-center space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
                >
                    {dictionary.videos.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto px-4"
                >
                    {dictionary.videos.description}
                </motion.p>
            </div>

            <div className="space-y-0">
                {dictionary.videos.items.map((video, index) => (
                    <VideoSection
                        key={video.id}
                        video={video}
                        index={index}
                        dictionary={dictionary}
                    />
                ))}
            </div>
        </div>
    );
}
