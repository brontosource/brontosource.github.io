import Image from "next/image";
import CharletteWorkingOnLaptopFromBed from "../../public/Charlette-WorkingOnLaptopFromBed.png";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";

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
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-base-200 pl-2 pt-2">
            <Image
              src={CharletteWorkingOnLaptopFromBed}
              alt="Charlette working on laptop from bed"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              molestias repudiandae voluptates nostrum doloremque, totam nemo
              dolores quis illo ex incidunt quasi cum nobis maiores fuga odio!
              Modi, vel sequi!
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <Image
              src={CharletteWorkingOnLaptopFromBed}
              alt="Charlette working on laptop from bed"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              molestias repudiandae voluptates nostrum doloremque, totam nemo
              dolores quis illo ex incidunt quasi cum nobis maiores fuga odio!
              Modi, vel sequi!
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <Image
              src={CharletteWorkingOnLaptopFromBed}
              alt="Charlette working on laptop from bed"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              molestias repudiandae voluptates nostrum doloremque, totam nemo
              dolores quis illo ex incidunt quasi cum nobis maiores fuga odio!
              Modi, vel sequi!
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default KeyFeatures;
