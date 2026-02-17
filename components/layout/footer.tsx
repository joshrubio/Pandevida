import { Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
    dictionary: {
        contact: {
            title: string;
            description: string;
            cta: string;
        };
        navigation: {
            about: string;
            videos: string;
            contact: string;
        }
    };
}

export function Footer({ dictionary }: FooterProps) {
    return (
        <footer className="bg-muted py-10 md:py-12 border-t">
            <div className="container px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Brand & Mission */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">Pan de Vida</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                            {dictionary.contact.description}
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/khubzalhayat/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.facebook.com/PanDeVidaAlmeria/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                                    {dictionary.navigation.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="#videos" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                                    {dictionary.navigation.videos}
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                                    {dictionary.navigation.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" dir="ltr">Contact</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground" dir="ltr">
                                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                                <a href="tel:+34624642344" className="hover:text-primary">+34 624 64 23 44</a>
                            </li>
                            <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground" dir="ltr">
                                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                                <a href="https://wa.me/34631930479" className="hover:text-primary">+34 631 93 04 79</a>
                            </li>
                            <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground" dir="ltr">
                                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                                <a href="mailto:khubzalhayat@gmail.com" className="hover:text-primary break-all">khubzalhayat@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Pan de Vida. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
