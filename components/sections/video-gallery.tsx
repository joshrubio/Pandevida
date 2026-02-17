'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, Share2, Info } from 'lucide-react';

interface Video {
    id: string;
    title: string;
    description: string;
    embedUrl: string;
    link?: string;
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

export function VideoGallery({ dictionary }: VideoGalleryProps) {
    if (!dictionary.videos.items || dictionary.videos.items.length === 0) return null;

    const featuredVideo = dictionary.videos.items[0];
    const collectionVideos = dictionary.videos.items.slice(1);

    return (
        <section id="videos" className="bg-background relative overflow-hidden">
            {/* 1. CINEMA MODE (Featured Video) */}
            <div className="relative py-20 md:py-24 bg-zinc-950 text-white overflow-hidden">
                {/* Cinematic Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                    <img
                        src={`https://img.youtube.com/vi/${featuredVideo.embedUrl.split('/').pop()?.split('?')[0]}/maxresdefault.jpg`}
                        alt="Background"
                        className="w-full h-full object-cover blur-xl scale-110"
                    />
                </div>

                <div className="container relative z-20 px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-xs font-medium tracking-wider mb-4 border border-white/10"
                        >
                            PREMIERE / FEATURED
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                        >
                            {dictionary.videos.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400 max-w-2xl mx-auto text-lg"
                        >
                            {dictionary.videos.description}
                        </motion.p>
                    </div>

                    {/* Featured Player */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 group">
                            <iframe
                                src={featuredVideo.embedUrl}
                                title={featuredVideo.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredVideo.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">{featuredVideo.description}</p>
                            </div>
                            <Button size="lg" className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-105 transition-all w-full md:w-auto" asChild>
                                <a href={featuredVideo.link || featuredVideo.embedUrl.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
                                    <Play className="mr-2 h-5 w-5 fill-current" />
                                    {dictionary.videos.watch}
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. THE COLLECTION (Grid) */}
            {collectionVideos.length > 0 && (
                <div className="py-20 bg-background">
                    <div className="container px-4 sm:px-6 md:px-8">
                        <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
                            <h3 className="text-xl font-semibold tracking-tight">More Stories</h3>
                            <span className="text-sm text-muted-foreground">{collectionVideos.length} Videos</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {collectionVideos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col"
                                >
                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4 shadow-sm border border-border/50 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                                        <iframe
                                            src={video.embedUrl}
                                            title={video.title}
                                            className="w-full h-full pointer-events-none group-hover:pointer-events-auto" // Hint at interactivity
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        {/* Overlay for pure click-through if preferred, or remove pointer-events-none above for direct play */}
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {video.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                            {video.description}
                                        </p>
                                        <Button variant="outline" size="sm" className="w-fit rounded-full hover:bg-primary hover:text-primary-foreground" asChild>
                                            <a href={video.link || video.embedUrl.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
                                                {dictionary.videos.watch}
                                            </a>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
