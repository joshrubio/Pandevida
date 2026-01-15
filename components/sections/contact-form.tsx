'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { sendEmail } from '@/app/actions';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
    dictionary: {
        contact: {
            title: string;
            description: string;
            cta: string;
            form?: {
                nameLabel: string;
                namePlaceholder: string;
                emailLabel: string;
                emailPlaceholder: string;
                messageLabel: string;
                messagePlaceholder: string;
                sending: string;
                successTitle: string;
                successMessage: string;
                sendAnother: string;
                errorGeneric: string;
            };
        };
    };
}

export function ContactForm({ dictionary }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Fallback for older dictionary versions or if keys are missing
    const t = dictionary.contact.form || {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "Your email",
        messageLabel: "Message",
        messagePlaceholder: "How can we help you?",
        sending: "Sending...",
        successTitle: "Message Sent!",
        successMessage: "Thank you for reaching out. We will get back to you soon.",
        sendAnother: "Send Another Message",
        errorGeneric: "Something went wrong. Please try again."
    };

    async function handleSubmit(formData: FormData) {
        setStatus('loading');

        const result = await sendEmail(formData);

        if (result?.error) {
            setStatus('error');
            setErrorMessage(result.error);
        } else {
            setStatus('success');
            // Reset form
            const form = document.querySelector('form') as HTMLFormElement;
            form?.reset();
        }
    }

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
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
                        <Card className="border-none shadow-2xl bg-card/80 backdrop-blur-md">
                            <CardHeader>
                                <CardTitle className="sr-only">Contact Form</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 sm:p-8">
                                {status === 'success' ? (
                                    <div className="text-center py-10 space-y-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-2">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">{t.successTitle}</h3>
                                        <p className="text-muted-foreground">
                                            {t.successMessage}
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setStatus('idle')}
                                            className="mt-4"
                                        >
                                            {t.sendAnother}
                                        </Button>
                                    </div>
                                ) : (
                                    <form action={handleSubmit} className="space-y-4 md:space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">{t.nameLabel}</label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder={t.namePlaceholder}
                                                    disabled={status === 'loading'}
                                                    className="h-11 bg-background/50 border-border/50 focus:bg-background transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">{t.emailLabel}</label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder={t.emailPlaceholder}
                                                    disabled={status === 'loading'}
                                                    className="h-11 bg-background/50 border-border/50 focus:bg-background transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">{t.messageLabel}</label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                placeholder={t.messagePlaceholder}
                                                disabled={status === 'loading'}
                                                className="min-h-[150px] bg-background/50 border-border/50 focus:bg-background transition-colors"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4" />
                                                <p>{errorMessage || t.errorGeneric}</p>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full text-base md:text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    {t.sending}
                                                </>
                                            ) : (
                                                dictionary.contact.cta
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
