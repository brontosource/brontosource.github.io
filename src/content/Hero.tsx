import Image from "next/image"
import SippingDrink from "../../public/BrontoSourceSippingHotDrink.svg?url";
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
            alt={"Charlotte the Bronto sipping on a hot drink"}
            style={{
              transform: "scale(-1, 1)",
            }}
          />
          <div>
            <TitleText sectionClasses="text-5xl font-bold text-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </TitleText>
            <SubtitleText sectionClasses="py-6 text-primary-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto autem dolores quam quod, reprehenderit saepe ipsam amet
              facere non ipsa voluptas rerum beatae ipsum dignissimos voluptatum
              fugiat voluptates recusandae!
            </SubtitleText>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero