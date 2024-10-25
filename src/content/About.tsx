import AboutDev from '@/components/AboutDev'
import AndyHeadshot from '../../public/andy.webp'
import MattHeadshot from '../../public/matt.webp'
import TopWave from "../../public/about-top-wave.svg";
import BotWave from "../../public/about-bot-wave.svg";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import SectionContainer from "@/ui/SectionContainer";
import Image from "next/image";

const About = () => {
  const Matt = {
    name: "Matthew Kulukundis",
    title: "CEO, BrontoSource",
    image: {
      data: MattHeadshot,
      alt: "Headshot of Matt, CEO & co-founders",
    },
  };
  const Andy = {
    name: "Dr. Andrew Soffer",
    title: "CTO, BrontoSource",
    image: {
      data: AndyHeadshot,
      alt: "Headshot of Andy, CTO & co-founders",
    },
  };
  return (
    <SectionContainer
      sectionClasses="text-left h-fit bg-base-300 relative py-2 my-10 md:my-0"
      sectionName="about"
      isFullWidth
    >
      <TopWave
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "99.5%",
          right: 0,
        }}
      />
      <BotWave
        style={{
          width: "100vw",
          position: "absolute",
          top: "99.5%",
          left: 0,
        }}
      />
      <div className="text-center mb-8">
        <TitleText DarkMode>Who are we?</TitleText>
        <SubtitleText DarkMode>
          Founded in September of 2024, BrontoSource is a team of energetic
          ex-Google engineers focused on creating tools to modernize codebases
          automatically. Our first target is automatic migration of C/C++ to
          idiomatic Rust for large code bases.
        </SubtitleText>
      </div>
      <div className="flex flex-col my-4 h-fit gap-y-10 gap-x-4">
        <AboutDev image={Matt.image} title={Matt.title} name={Matt.name}>
          Matt spent the past eleven years at Google where he led the Software
          Ecosystems organization as a Principal Engineer. During that time he
          designed language and library features for migration, as well as
          directly planning and executing multiple migrations of previously
          unapproachable difficulty. Rust’s{" "}
          <code>std::collections::HashMap</code> is based directly on his work.
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

export default About