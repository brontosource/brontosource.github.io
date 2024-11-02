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

const Solutions = () => {
  return (
    <SectionContainer
      sectionName="solutions"
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
          <div className="mockup-code text-base-100 relative">
          <pre dangerouslySetInnerHTML={{__html:
            hljs.highlight(`
#include <stdio.h>

  int main() {                                    
    int i;
    for (i = 1; i <= 100; ++i) {
      if (i % 3 == 0) printf("Fizz");
      if (i % 5 == 0) printf("Buzz");
      if ((i % 3 != 0) && (i % 5 != 0)) {
        printf("number=%d", i);
      }
      printf("\\n");
    }
 
    return 0;
  }`.trim(), {language: 'c'}).value
/* leading extra 1-space indent accounts for an invisible pre:: */
/* int main() { has trailing whitespace to make the box a bit wider */
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
          <div className="mockup-code bg-base-300 text-base-100 h-full">
          <pre dangerouslySetInnerHTML={{__html:
hljs.highlight(`
fn main() {                            
    for i in 1..=100 {
      if i % 3 == 0 {
        print!("Fizz");
      }
      if i % 5 == 0 {
        print!("Buzz");
      }
      if i % 3 != 0 && i % 5 != 0 {
        print!("number={}", i);
      }
      println!();
    }
  }`.trim(), {language: 'rust'}).value
/* leading extra 2-space indent accounts for an invisible pre:: */
/* fn main() { has trailing whitespace to make the box a bit wider */
          }} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Solutions;
