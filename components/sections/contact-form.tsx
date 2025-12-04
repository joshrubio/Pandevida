'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ContactFormProps {
    dictionary: {
        contact: {
            title: string;
            description: string;
            cta: string;
        };
    };
}

export function ContactForm({ dictionary }: ContactFormProps) {
    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-muted/30">
            <div className="container px-4 sm:px-6 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-primary">
                            {dictionary.contact.title}
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            {dictionary.contact.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="sr-only">Contact Form</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <form className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" placeholder="Your name" className="h-10 md:h-11" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="Your email" className="h-10 md:h-11" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] md:min-h-[150px]" />
                                    </div>
                                    <Button type="submit" className="w-full text-base md:text-lg py-5 md:py-6">
                                        {dictionary.contact.cta}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
