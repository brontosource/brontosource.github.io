import Image from "next/image"
import SippingDrink from "../../public/Charlotte-HoldingTea.png";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";

const Hero = () => {
  return (
    <SectionContainer sectionName="hero">
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={SippingDrink}
            className="max-w-sm hidden sm:block"
            alt={"Charlotte Bronto sipping a hot drink"}
            style={{
              transform: "scale(-1, 1)",
            }}
          />
          <div>
            <TitleText sectionClasses="text-5xl font-bold text-primary">
              Modernizing old code at scale.
            </TitleText>
            <SubtitleText sectionClasses="py-6">
              Legacy code is a massive source of technical, strategic, and
              legal risk. Its costs only grow with time.
              <p/>
              BrontoSource provides end-to-end solutions that incrementally
              update old codebases and keep them clean into the future.
              <p/>
              Our approach combines decades of experience keeping the world's
              largest codebases up to date with innovative algorithms and AI
              that provide incremental, understandable, and traceable migrations
              that scale sublinearly with the size of the codebase.
            </SubtitleText>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero
