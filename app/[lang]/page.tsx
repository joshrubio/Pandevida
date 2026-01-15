import { getDictionary } from "@/get-dictionary";
import { i18n, Locale } from "@/i18n-config";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { VideoGallery } from "@/components/sections/video-gallery";
import { EvangelisticSection } from "@/components/sections/evangelistic-section";
import { PastoralMessage } from "@/components/sections/pastoral-message";
import { SpiritualJourneySection } from "@/components/sections/spiritual-journey-section";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/layout/footer";
import { BibleReading } from "@/components/sections/bible-reading";
import { FeaturedResources } from "@/components/sections/featured-resources";
import { YourStorySection } from "@/components/sections/your-story-section";

import { TestimoniesSection } from "@/components/sections/testimonies-section";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar dictionary={dictionary} lang={lang} />

      <HeroSection dictionary={dictionary} />

      {/* New Section: Bible Reading - Muted Background */}
      <BibleReading dictionary={dictionary} />

      {/* Dark/Primary Background */}
      <EvangelisticSection dictionary={dictionary} />

      {/* Light/Background */}
      <VideoGallery dictionary={dictionary} />

      {/* New Section: Your Story - Full Width */}
      <YourStorySection dictionary={dictionary as any} />

      {/* New Section: Testimonies (Arabic Only) - Full Width */}
      <TestimoniesSection dictionary={dictionary as any} />

      {/* Gradient Background */}
      <SpiritualJourneySection dictionary={dictionary} />

      {/* Gradient/Light Background */}
      <PastoralMessage dictionary={dictionary} />

      {/* Dark/Muted Background */}
      <ContactForm dictionary={dictionary} />

      <Footer dictionary={dictionary} />
    </main>
  );
}
