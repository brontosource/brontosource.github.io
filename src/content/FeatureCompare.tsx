import Image from "next/image";
import CharlotteStoneTablet from "../../public/Charlotte-StoneTablet.webp";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import { CPPExmapleCode, RustExampleCode } from "@/constants/fizzbuzz";

const FeatureCompare = () => {
  const CPPlineArray = CPPExmapleCode.split(`(?<')(\r\n|\r|\n)(?!');)`);
  const RustlineArray = RustExampleCode.split(`(?<')(\r\n|\r|\n)(?!');)`);

  return (
    <SectionContainer
      sectionName="feature-compare"
      sectionClasses="flex flex-col gap-8 justify-between"
      innerContainerClasses="w-full"
    >
      <TitleText>Our Solution</TitleText>
      <SubtitleText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        repellendus molestias expedita obcaecati, esse voluptatibus in similique
        beatae saepe voluptas autem iste officiis explicabo aliquam, voluptate
        aliquid pariatur!
      </SubtitleText>
      <div className="flex lg:flex-row flex-col mt-4 md:mt-8 h-full w-full justify-between gap-6">
        <div className="flex flex-col justify-center">
          <h2>Input C++</h2>
          <div className="mockup-code text-sm text-base-100 relative">
            {CPPlineArray.map((line, i) => (
              <pre key={i}>
                <code>{`${line}`}</code>
              </pre>
            ))}
            <div className="w-1/4 sm:w-1/3 bottom-0 right-0 scale-x-[-1] absolute">
              <Image
                src={CharlotteStoneTablet}
                alt="Charlotte Bronto reading a stone tablet"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2>BrontoSource Output</h2>
          <div className="mockup-code bg-primary text-sm text-primary-content h-full">
            {RustlineArray.map((line, i) => (
              <pre key={i}>
                <code>{`${line}`}</code>
              </pre>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeatureCompare;
