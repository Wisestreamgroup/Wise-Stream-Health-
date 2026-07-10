import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { MissionStrip } from "@/components/mission-strip";
import { ServicesGrid } from "@/components/services-grid";
import { Specialties } from "@/components/specialties";
import { TrustSection } from "@/components/trust-section";
import { FounderQuote } from "@/components/founder-quote";
import { CareersSection } from "@/components/careers-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroSection />
      <MissionStrip />
      <ServicesGrid />
      <Specialties />
      <TrustSection />
      <FounderQuote />
      <CareersSection />
      <SiteFooter />
    </>
  );
}
