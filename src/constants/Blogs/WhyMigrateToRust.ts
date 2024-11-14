import { authors } from "../authors";

const { Matt } = authors;

const WhyMigrateToRust = {
  title: "Why Migrate to Rust?",
  slug: "why-migrate-to-rust",
  author: Matt,
  content: `
# Why migrate from C and C++ to Rust?

### By [Matt Kulukundis](mailto:matt@brontosource.dev)

At BrontoSource, we are language nerds with deep expertise in and fondness for C and C++.  Unfortunately, C and C++ are a major source of security vulnerabilities.  Their lack of memory safety causes [70% of security vulnerabilities](https://storage.googleapis.com/gweb-research2023-media/pubtools/7665.pdf) across a wide range of codebases including Chrome, Android, and Microsoft.  This is in spite of Google's tremendous investments in dynamic vulnerability tracing and detection techniques like sanitizers, memory tagging, and fuzz testing.  Meanwhile, the Android project has [observed a massive reduction](https://thehackernews.com/2024/09/googles-shift-to-rust-programming-cuts.html?m=1) in the number of new vulnerabilities discovered after shifting new development to Rust.

At the same time as practitioners see meaningful improvements to cybersecurity by shifting to Rust, the United States's Cybersecurity & Infrastructure Security Agency (CISA) has been issuing ever more pressing directives ([Sep 20, 2023](https://www.cisa.gov/news-events/news/urgent-need-memory-safety-software-products); [Dec 6, 2023](https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps); [Jun 26, 2024](https://www.cisa.gov/resources-tools/resources/exploring-memory-safety-critical-open-source-projects); [Oct 16, 2024](https://www.cisa.gov/resources-tools/resources/product-security-bad-practices)) to move away from C and C++.  CISA is now asserting that companies should have a memory safety roadmap as a [standard best practice](https://www.cisa.gov/sites/default/files/2024-10/joint-guidance-product-security-bad-practices-508c.pdf) on par with following CVE procedures and updating dependencies with known security vulnerabilities.  The EU is passing similar cybersecurity rules with [NIS2 starting to take effect already](https://www.mayerbrown.com/en/insights/publications/2024/10/new-eu-cyber-rules-nis2-take-effect-implementing-rules-adopted).

Until recently, there was no credible replacement for C and C++ in embedded and high performance systems, but Rust has eliminated that gap.  Rust is now a [supported language in the linux kernel](https://lkml.org/lkml/2021/4/14/1023), with toolchains [certified for automotive and industrial application](https://ferrocene.dev/en/).

Rust is a high performance language capable of addressing cybersecurity risks, while simultaneously allowing for an incremental migration of large systems.BrontoSource provides tools and expertise to help you shift your codebase safely, incrementally, and automatically to Rust.
`,
};

export default WhyMigrateToRust;
