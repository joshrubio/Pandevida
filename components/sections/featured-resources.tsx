'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Video } from 'lucide-react';

interface Resource {
    title: string;
    description: string;
    cta: string;
    link: string;
}

interface FeaturedResourcesProps {
    resources: Resource[];
}

export function FeaturedResources({ resources }: FeaturedResourcesProps) {
    if (!resources || resources.length === 0) return null;

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-muted/30">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6">
                                {index === 0 ? (
                                    <FileText className="w-7 h-7 text-primary" />
                                ) : (
                                    <Video className="w-7 h-7 text-primary" />
                                )}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                                {resource.title}
                            </h3>

                            <p className="text-base md:text-lg text-muted-foreground mb-8 flex-grow leading-relaxed">
                                {resource.description}
                            </p>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto rounded-full border-primary/20 hover:bg-primary/5"
                                onClick={() => window.open(resource.link, '_blank')}
                            >
                                {resource.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
