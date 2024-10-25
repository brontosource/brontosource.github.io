import About from "@/content/About";
import Contact from "@/content/Contact";
import FeatureCompare from "@/content/FeatureCompare";
import Hero from "@/content/Hero";
import KeyFeatures from "@/content/KeyFeatures";

export default function Home() {
  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100">
      <Hero />
      <About />
      <FeatureCompare />
      <KeyFeatures />
      <Contact />
    </main>
  );
}
