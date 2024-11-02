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
        BrontoSource provides incremental, reproducible, understanble migrations
        that fit into existing workflows leaving behind clean, idiomatic code.
        BrontoSource migrates components of large systems independetly, allowing
        developers to extend their codebase while the upgrade progresses in the
        background, modernizing your codebase and eliminating long-term risks.
        <p/>
        Effective migrations require incremental updates that provide
        incremental value.  Bug-for-bug replacements are routinely behind
        schedule, over budget, and leave a nest of special case logic that
        developers are afraid to change. Full system rewrites delay the
        technical risk to deployment, causing unexpected delays and late
        discovery of <a href="https://www.hyrumslaw.com/">implicit
        requirements</a>.  In both cases, teams have to maintain two systems
        while the second one is being built, splitting their focus and efforts.
        <p/>
        After BrontoSource has finished modernizing a codebase, it can continue
        operating in the background providing ongoing updates and security
        patches ensuring your codebase stays clean into the future.
      </SubtitleText>
    </SectionContainer>
  );
};

export default Solutions;
