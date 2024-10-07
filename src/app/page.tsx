import Image from "next/image";
import SippingDrink from "../../public/BrontoSourceSippingHotDrink.svg";
import AboutDev from "@/components/AboutDev";
import PhoneIcon from "@/ui/icons/phone";
import MailIcon from "@/ui/icons/mail";

export default function Home() {
  return (
    <main className="w-full text-center max-w-[1100px] px-4 lg:mx-auto flex flex-col gap-12 py-4">
      <section>
        <h1 className="text-4xl capitalize">Our site is under developtment</h1>
        <h2 className="text-2xl text-white/50">Please check back with us later!</h2>
        <Image src={SippingDrink} alt={"Charlette the Bronto sipping a hot drink"} className="w-3/5 md:w-4/12 mx-auto" />
      </section>
      <section className="text-left h-fit">
        <div className="max-w-3xl text-center mx-auto mb-8">
          <h2 className="text-4xl sm:text-2xl text-primary">
            Who are we?
          </h2>
          <p>
            Founded in September of 2024, BrontoSource is a team of energetic
            ex-Google engineers focused on creating tools to modernize codebases
            automatically.  Our first target is automatic migration of C/C++ to
            idiomatic Rust for large code bases.
          </p>
        </div>
        <div className="flex flex-col my-4 h-fit gap-y-10 gap-x-4 max-w-3xl mx-auto">
          <AboutDev imageURL={"/matt.webp"} title={"CEO, BrontoSource"} name={"Matthew Kulukundis"}>
            Matt spent the past eleven years at Google where he led the Software Ecosystems organization as a Principal Engineer. During that time he designed language and library features for migration, as well as directly planning and executing multiple migrations of previously unapproachable difficulty. Rust’s <code>std::collections::HashMap</code> is based directly on his work.
          </AboutDev>
          <AboutDev flipped imageURL={"/andy.webp"} title={"CTO, BrontoSource"} name={"Dr. Andrew Soffer"}>
            Andy spent the past eight years at Google where he led the C++ Refactoring team as a Staff Engineer. During that time he designed and implemented novel technologies and techniques for source-to-source migrations across Google’s monorepo, as well as executing those migrations over hundreds of millions of lines of code.
          </AboutDev>
        </div>
      </section>
      <section className="h-fit flex flex-col gap-2 max-w-3xl mx-auto">
        <div>
          <h2 className="text-4xl sm:text-2xl text-primary">
            Contact Us
          </h2>
          <p>
            Things are early days for us at the moment but if you are interested
            in partnering with us as an early customer or investor, please
            reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex m-auto h-fit items-center gap-2">
              <MailIcon />
              <h3 className="text-3xl">Email</h3>
            </div>
            <p>
              <a href="mailto:contact@brontosource.dev">contact@brontosource.dev</a>
            </p>
          </div>
        </div>
      </section>
    </main >
  );
}
