import Image from "next/image";
import CharletteWorkingOnLaptopFromBed from "../../public/Charlette-WorkingOnLaptopFromBed.png";
import CharletteHoldingRustLogo from "../../public/Charlette-HoldingRustLogo.png";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import FeatCard from "@/components/FeatCard";

const KeyFeatures = () => {
  return (
    <SectionContainer
      sectionName="hero"
      innerContainerClasses="flex flex-col gap-y-10"
    >
      <div>
        <TitleText sectionClasses="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </TitleText>
        <SubtitleText sectionClasses="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          iusto autem dolores quam quod, reprehenderit saepe ipsam amet facere
          non ipsa voluptas rerum beatae ipsum dignissimos voluptatum fugiat
          voluptates recusandae!
        </SubtitleText>
      </div>
      <div className="flex md:grid md:grid-flow-col gap-4 flex-wrap">
        <FeatCard
          image={{
            data: CharletteWorkingOnLaptopFromBed,
            alt: "Charlette the Bronto working on laptop from bed",
          }}
          title={"lorem ipsum dolor sit amet"}
          content={"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molest repudiandae voluptates nostrum doloremque, totam nemo dolores quis illo ex incidunt quasi cum nobis maiores fuga odio! Modi, vel sequi!"}
          showButton={true}
        />
        <FeatCard
          image={{
            data: CharletteHoldingRustLogo,
            alt: "Charlette the Bronto Looking at Rust, C, and C++ logos",
          }}
          title={"lorem ipsum dolor sit amet"}
          content={"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molest repudiandae voluptates nostrum doloremque, totam nemo dolores quis illo ex incidunt quasi cum nobis maiores fuga odio! Modi, vel sequi!"}
          showButton={true}
        />
        
      </div>
    </SectionContainer>
  );
};

export default KeyFeatures;
