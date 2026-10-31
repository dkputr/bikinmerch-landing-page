import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Products from "@/components/Products";
import Customization from "@/components/Customization";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Products />
        <Customization />
        <WhyUs />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
