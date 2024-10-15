import About from "@/content/About";
import Contact from "@/content/Contact";
import FeatureCompare from "@/content/FeatureCompare";

export default function Home() {
  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-8 py-4 md:gap-y-16 lg:gap-y-28">
      <FeatureCompare />
      <About />
      <Contact />
    </main>
  );
}
