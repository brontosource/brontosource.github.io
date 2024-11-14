import { authors } from "../authors";

const { Matt } = authors;

const LargeScaleChanges = {
  title: "What are Large Scale Changes?",
  slug: "large-scale-changes",
  author: Matt,
  content: `
What are Large Scale Changes?

By [Matt Kulukundis](mailto:Matt@brontosource.dev)

When I worked at Google, my teams [kept the codebase up-to-date](https://abseil.io/resources/wapi18-winters.pdf) by deploying advanced tooling to manage sweeping changes across hundreds of millions of lines of code.  We routinely upgraded third-party libraries, patched security vulnerabilities, and replaced deprecated libraries with newer equivalents upgrading code for tens of thousands of engineers without slowing them down.  How did we transform problems that usually require cross-cutting mandates and years of work into routine problems for a small team?

Stories of replacement systems running behind schedule, over budget, and eventually being abandoned are all too frequent across software planning.  At the same time, clever engineers fondly recount how they found parts of a much larger system, replaced them bit-by-bit, and an entirely new system emerged, like a Ship of Theseus, on the other side.  These cautionary tales and boasts, shared like fighters comparing scars, all have a common theme: the risk associated with a change is proportional to the deployable increment of the change.  Tests are wonderful and give you early signals whether a change will work, but production is the final arbiter of correctness.  If a change cannot be deployed to production because it is part of a much larger new system, then the eventual deployment is going to take on all the risk of all its constituent changes multiplicatively.

The concept of a Large Scale Change takes this idea to its logical end.  We built tools that created small changes, tens to hundreds of thousands of them, automatically.  These changes would migrate parts of the codebase. Crucially, they could be independently validated and deployed.  As the system churned in the background, healing the codebase, we would investigate cases where changes failed validation, then we would extend and improve the change generator.

Breaking down a high level refactor into a [series of incremental automatable refactors](https://youtu.be/v_yzLe-wnfk) takes practice, but the cost reduction of centralizing that expertise is massive.  Without centralization, every team must dedicate a person (or more!) to understand the nature of the required change, plan how to change it in their corner of the codebase, and then generate, validate, and submit that change.  At the size of a single team's code, it almost never makes sense to build tooling or automate any of that process, so it will be done by hand, in every single team.  With centralization, one or two people will build up the expertise to understand this problem and build tooling to solve it for the entire organization.  All of the partner teams can continue focusing on their own deliverables, treating the centralized team as a very quiet, highly productive engineer working within established processes to update their code for them.

At BrontoSource, we take this model of a self healing codebase and make it accessible to everyone.  We provide tools to incrementally modernize your code base, allowing it to remain evergreen, efficient, and secure into the future.
`,
};

export default LargeScaleChanges;
