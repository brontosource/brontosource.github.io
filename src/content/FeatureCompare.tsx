import Image from "next/image";
import CharlotteStoneTablet from "../../public/Charlotte-StoneTablet.webp";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import hljs from 'highlight.js/lib/core';
import rust from 'highlight.js/lib/languages/rust';
import c from 'highlight.js/lib/languages/c';
import 'highlight.js/styles/shades-of-purple.css';
// runners up for syntax highlighting:
// import 'highlight.js/styles/agate.css';
// import 'highlight.js/styles/devibeans.css';
// import 'highlight.js/styles/felipec.css';
// import 'highlight.js/styles/hybrid.css';
// import 'highlight.js/styles/ir-black.css';
// import 'highlight.js/styles/rainbow.css';
// import 'highlight.js/styles/xt256.css';
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('c', c);

const FeatureCompare = () => {
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
          <pre dangerouslySetInnerHTML={{__html:
            hljs.highlight(`
 void fizzbuzz(int const range) noexcept {
    constexpr std::pair<int, char const*> pairs[] {
      {3, "Fizz"}, {5, "Buzz"}, {7, "Fuzz"}, {13, "Bizz"}
    };

    for (int i = 1; i < range; ++i) {
      bool none = true;
      for (auto const& [num, str] : pairs) {
        if (i % num == 0) {
          std::printf("%s", str);
          none = false;
        } 
      }

      if (none) {
        std::printf("%d", i); 
      }
      std::putchar('\\n');
    }
  }`.trim(), {language: 'c'}).value
/* leading extra 1-space indent accounts for an invisible pre:: */
          }} />
            <div className="w-1/4 sm:w-1/3 bottom-1 right-0 scale-x-[-1] absolute">
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
          <div className="mockup-code bg-base-300 text-sm text-base-100 h-full">
          <pre dangerouslySetInnerHTML={{__html:
hljs.highlight(`
pub fn fizz_buzz(n: i32) -> Vec<String> {
    let mut result = Vec::new();

    for i in 1..=n {
      if i % 3 == 0 && i % 5 == 0 {
        result.push("FizzBuzz".to_string());
      } else if i % 3 == 0 {
        result.push("Fizz".to_string());
      } else if i % 5 == 0 {
        result.push("Buzz".to_string());
      } else {
        result.push(i.to_string());
      }
    }
    result
  }`.trim(), {language: 'rust'}).value
/* leading extra 2-space indent accounts for an invisible pre:: */
          }} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeatureCompare;
