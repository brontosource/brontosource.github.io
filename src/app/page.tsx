import About from "@/content/About";
import Hero from "@/content/Hero";
import Contact from "@/content/Contact";

export default function Home() {
  return (
    <main className="flex flex-col snap-y scroll-smooth gap-y-8 py-4 md:gap-y-16 lg:gap-y-28 px-4 lg:px-0">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
