import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DualSystem from "@/components/DualSystem";
import Stats from "@/components/Stats";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <Features />
        <DualSystem />
        <Stats />
        <Privacy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
