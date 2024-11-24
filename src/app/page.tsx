import About from "@/content/About";
import Contact from "@/content/Contact";
import Solutions from "@/content/Solutions";
import Hero from "@/content/Hero";
import Rust from "@/content/Rust";
import KeyFeatures from "@/content/KeyFeatures";
import { createClient } from "contentful";

export const ContentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
});

export default function Home() {
  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100">
      <Hero />
      <About />
      <Solutions />
      <KeyFeatures />
      <Rust />
      <Contact />
    </main>
  );
}
