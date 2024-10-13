import Image from "next/image";
import CharletteStoneTablet from "../../public/Charlette-StoneTablet.webp";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";

const FeatureCompare = () => {
  return (
    <SectionContainer
      sectionName="feature-compare"
      sectionClasses="flex flex-col gap-8 justify-between"
    >
      <span>
        <TitleText>Our Solution</TitleText>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          repellendus molestias expedita obcaecati, esse voluptatibus in
          similique beatae saepe voluptas autem iste officiis explicabo aliquam,
          voluptate aliquid pariatur!
        </h3>
      </span>
      <div className="flex md:flex-row flex-col justify-between">
        <Image
          src={CharletteStoneTablet}
          alt="Charlette the BrontoSource reading a stone tablet"
          style={{ objectFit: "cover", width: "auto", height: "100%" }}
          className="md:block hidden lg:max-h-[32rem] md:max-h-96"
        />
        <div className="flex flex-col justify-between gap-">
          <div className="flex flex-col-reverse justify-center">
            <h2>Input C++</h2>
            <div className="mockup-code text-base-100">
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
          <Image
            src={CharletteStoneTablet}
            alt="Charlette the BrontoSource reading a stone tablet"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "100%",
              maxHeight: "384px",
            }}
            className="block md:hidden"
          />
          <div className="flex flex-col md:flex-col-reverse justify-center">
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

// #![allow(dead_code, mutable_transmutes, non_camel_case_types, non_snake_case, non_upper_case_globals, unused_assignments, unused_mut)]
// #[no_mangle]
// pub unsafe extern "C" fn deref(mut f: *mut libc::c_float) -> libc::c_float {
//     return *f;
// }

export default FeatureCompare;
