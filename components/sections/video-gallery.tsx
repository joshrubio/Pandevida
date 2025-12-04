'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface VideoGalleryProps {
    dictionary: {
        videos: {
            title: string;
            description: string;
            watch: string;
        };
    };
}

const videos = [
    {
        id: 'jesus-film',
        title: 'The Jesus Film',
        titleAr: 'فيلم عن حياة يسوع المسيح',
        thumbnail: 'https://img.youtube.com/vi/xsLfWCCOsT8/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/xsLfWCCOsT8',
    },
    {
        id: 'king-of-glory',
        title: 'King of Glory',
        titleAr: 'ملك المجد',
        thumbnail: 'https://img.youtube.com/vi/zvJQbR_ATHA/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/zvJQbR_ATHA',
    },
    {
        id: 'way-of-righteousness',
        title: 'The Way of Righteousness',
        titleAr: 'برنامج طريق البر',
        thumbnail: 'https://img.youtube.com/vi/C9Bmt-LI1Z4/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/C9Bmt-LI1Z4',
    },
    {
        id: 'whats-your-question',
        title: "What's Your Question?",
        titleAr: 'برنامج أشنو سؤالك',
        thumbnail: 'https://img.youtube.com/vi/E_IC7rMW8ys/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/E_IC7rMW8ys',
    },
];

export function VideoGallery({ dictionary }: VideoGalleryProps) {
    return (
        <section id="videos" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
            <div className="container px-4 sm:px-6 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-primary">
                        {dictionary.videos.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                        {dictionary.videos.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-none overflow-hidden">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <CardHeader className="p-4 md:p-6">
                                            <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                                                {video.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardFooter className="p-4 md:p-6 pt-0">
                                            <Button variant="ghost" className="w-full text-sm md:text-base group-hover:bg-primary/10 group-hover:text-primary">
                                                {dictionary.videos.watch}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
                                    <div className="aspect-video w-full">
                                        <iframe
                                            src={video.embedUrl}
                                            title={video.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
