import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { StructuredData } from "@/components/seo/structured-data";
import { organizationStructuredData, websiteStructuredData, localBusinessStructuredData } from "@/lib/structured-data";
import { brandSEOData, homePageSEOData } from "@/lib/brand-seo";

export default function Home() {
  return (
    <>
      <StructuredData data={organizationStructuredData} />
      <StructuredData data={websiteStructuredData} />
      <StructuredData data={localBusinessStructuredData} />
      <StructuredData data={brandSEOData} />
      <StructuredData data={homePageSEOData} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}