import Image from "next/image";
import SippingDrink from "../../public/BrontoSourceSippingHotDrink.svg";
import AboutDev from "@/components/AboutDev";
import PhoneIcon from "@/ui/icons/phone";
import MailIcon from "@/ui/icons/mail";
export default function Home() {
  const AndyImage = "../../public/andy.webp"

  return (
    <main className="w-full text-center max-w-[1100px] px-4 lg:mx-auto flex flex-col gap-12 py-4">
      <section>
        <h1 className="text-4xl capitalize">Our site is under developtment</h1>
        <h2 className="text-2xl text-white/50">Please check back with us later!</h2>
        <Image src={SippingDrink} alt={"Charlette the Bronto sipping a hot drink"} className="w-3/5 md:w-4/12 mx-auto" />
      </section>
      <section className="text-left h-fit">
        <div className="max-w-xl text-center mx-auto mb-8">
          <h2 className="text-4xl sm:text-2xl text-primary">
            Who are we?
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit numquam ex optio tenetur, inventore nisi dolor veritatis ut pariatur laudantium laborum accusantium iste sunt officiis. Velit dolores modi dignissimos.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row my-4 h-fit gap-y-10 gap-x-4 lg:max-w-full max-w-xl mx-auto">
          <AboutDev imageURL={AndyImage} title={"CTO, BrontoSource"} name={"Dr. Andrew Soffer"} description={"Dr. Soffer spent the past eight years at Google where he led the C++ Refactoring team as a Staff Engineer. During that time he designed and implemented novel technologies and techniques for source-to-source migrations across Google’s monorepo, as well as executing those migrations over hundreds of millions of lines of code."} />
          <AboutDev imageURL={"https://i.pravatar.cc/300"} title={"CEO, BrontoSource"} name={"Matthew Kulukundis"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit numquam ex optio tenetur, inventore nisi dolor veritatis ut pariatur laudantium laborum accusantium iste sunt officiis. Velit dolores modi dignissimos."} />
        </div>
      </section>
      <section className="h-fit flex flex-col gap-2">
        <div>
          <h2 className="text-4xl sm:text-2xl text-primary">
            Contact Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex m-auto h-fit items-center gap-2">
              <MailIcon />
              <h3 className="text-3xl">Email</h3>
            </div>
            <p>
              <a href="mailto:example@gmail.com">Example@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex m-auto h-fit items-center gap-2">
              <PhoneIcon />
              <h3 className="text-3xl">Phone</h3>
            </div>
            <p>
              <a href="tel:555-555-5555">+1 (555) 555-5555</a>
            </p>
          </div>
        </div>
      </section>
    </main >
  );
}
