import Image from "next/image";
import CharletteStoneTablet from "../../public/Charlette-StoneTablet.webp";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";

const FeatureCompare = () => {
  return (
    <SectionContainer
      sectionName="feature-compare"
      sectionClasses="flex flex-col gap-8 justify-between"
    >
      <TitleText>Our Solution</TitleText>
      <SubtitleText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        repellendus molestias expedita obcaecati, esse voluptatibus in similique
        beatae saepe voluptas autem iste officiis explicabo aliquam, voluptate
        aliquid pariatur!
      </SubtitleText>
      <div className="flex md:flex-row flex-col justify-between mt-4 md:mt-8">
        <Image
          src={CharletteStoneTablet}
          alt="Charlette the BrontoSource reading a stone tablet"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="md:block hidden my-auto"
        />
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-center">
            <h2>Input C++</h2>
            <div className="mockup-code text-base-100">
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`    return *f;`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`    return *f;`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`    return *f;`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`123456789012345678901234567890`}</code>
              </pre>
              <pre>
                <code>{`Character limit per line: 30`}</code>
              </pre>
              <pre>
                <code>{`float deref(float *f) {`}</code>
              </pre>
              <pre>
                <code>{`    return *f;`}</code>
              </pre>
              <pre>
                <code>{`}`}</code>
              </pre>
            </div>
          </div>
          {/* <Image
            src={CharletteStoneTablet}
            alt="Charlette the BrontoSource reading a stone tablet"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "100%",
              maxHeight: "384px",
            }}
            className="block md:hidden"
          /> */}
          <div className="flex flex-col justify-center">
            <h2>BrontoSource Output</h2>
            <div className="mockup-code bg-primary text-primary-content">
              <pre>
                <code>{`fn deref(f: &mut f32) -> f32 {`}</code>
              </pre>
              <pre>
                <code>{`    *f`}</code>
              </pre>
              <pre>
                <code>{`}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeatureCompare;
