import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { LiveTicker } from "@/components/live-ticker";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { FeaturedWork } from "@/components/featured-work";
import { Interests } from "@/components/interests";
import { Radar } from "@/components/radar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Hero />
      <LiveTicker />
      <About />
      <Services />
      <Experience />
      <FeaturedWork />
      <Interests />
      <Radar />
      <Footer />
    </>
  );
}
