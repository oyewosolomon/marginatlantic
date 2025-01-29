import CTASection from "./components/CTASection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
   <>
   <Hero/>
   <Features/>
   <WhyChooseUs/>
   <Testimonials/>
   <Integrations/>
   <CTASection/>
   <Footer/>
   </>
  );
}
