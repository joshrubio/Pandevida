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
      <EvangelisticSection dictionary={dictionary} />
      <VideoGallery dictionary={dictionary} />
      <SpiritualJourneySection dictionary={dictionary} />
      <PastoralMessage dictionary={dictionary} />
      <ContactForm dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </main>
  );
}
