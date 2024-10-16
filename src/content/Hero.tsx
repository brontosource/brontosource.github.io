import Image from "next/image"
import SippingDrink from "../../public/BrontoSourceSippingHotDrink.svg";
import SectionContainer from "@/ui/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer sectionName="hero">
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={SippingDrink}
            className="max-w-sm hidden sm:block"
            alt={"Charlette the Bronto sipping on a hot drink"}
            style={{
              transform: "scale(-1, 1)",
            }}
          />
          <div>
            <h1 className="text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto autem dolores quam quod, reprehenderit saepe ipsam amet
              facere non ipsa voluptas rerum beatae ipsum dignissimos voluptatum
              fugiat voluptates recusandae!
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero