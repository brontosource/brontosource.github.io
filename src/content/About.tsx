import AboutDev from "@/components/AboutDev";
import TopWave from "../../public/about-top-wave.svg";
import BotWave from "../../public/about-bot-wave.svg";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import SectionContainer from "@/ui/SectionContainer";
import { authors } from "@/constants/authors";

const About = () => {
  const { Matt, Andy } = authors;

  return (
    <SectionContainer
      sectionClasses="text-left h-fit bg-base-300 relative py-2 my-10 md:my-0 py-[140px] xl:py-[180px] 2xl:py-[200px] min-[2000px]:py-[240px] min-[2200px]:py-[280px] min-[2400px]:py-[320px]"
      sectionName="about"
      isFullWidth
    >
      <TopWave
        style={{
          width: "100vw",
          position: "absolute",
          top: -1,
          right: 0,
          zIndex: 1,
          overflow: "hidden",
          lineHeight: 0,
          fill: "#F6FDFC",
        }}
      />
      <BotWave
        style={{
          width: "100vw",
          position: "absolute",
          bottom: -1,
          right: 0,
          zIndex: 1,
          rotate: "180deg",
          fill: "#F6FDFC",
        }}
      />
      <div className="text-center mb-8">
        <TitleText DarkMode>About Us</TitleText>
        <SubtitleText DarkMode>
          Founded in September 2024 by a team of energetic ex-Google engineers.
          We love seeing codebases flourish and building tools that anticipate
          the entire software lifecycle. We bring decades of experience
          maintaining the world's largest codebases, keeping them healthy and
          making them self-healing.
        </SubtitleText>
      </div>
      <div className="flex flex-col my-4 h-fit gap-y-10 gap-x-4">
        <AboutDev image={Matt.image} title={Matt.title} name={Matt.name}>
          Matt spent the past eleven years at Google where he led the Software
          Ecosystems organization as a Principal Engineer. During that time he
          designed language and library features for migration, as well as
          directly planning and executing multiple migrations of previously
          unapproachable difficulty. Rust’s{" "}
          <a href="https://doc.rust-lang.org/std/collections/struct.HashMap.html">
            <code>std::collections::HashMap</code>
          </a>{" "}
          is based directly on{" "}
          <a href="https://www.youtube.com/watch?v=ncHmEUmJZf4">his work</a>.
        </AboutDev>
        <AboutDev
          flipped
          image={Andy.image}
          title={Andy.title}
          name={Andy.name}
        >
          Andy spent the past eight years at Google where he led the C++
          Refactoring team as a Staff Engineer. During that time he designed and
          implemented novel technologies and techniques for source-to-source
          migrations across Google’s monorepo, as well as executing those
          migrations over hundreds of millions of lines of code.
        </AboutDev>
      </div>
    </SectionContainer>
  );
};

export default About;
