"use client";

import MailIcon from "@/ui/icons/mail";
import PersonIcon from "@/ui/icons/person";
import PhoneIcon from "@/ui/icons/phone";
import InputBox from "@/ui/InputBox";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import TitleText from "@/ui/TitleText";
import { useRouter } from "next/navigation";
import Image from "next/image";
import topContactWave from "../../public/contact-top-waves.svg";

const Contact = () => {
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("__form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };

  return (
    <SectionContainer
      sectionClasses="text-center bg-info py-6 mt-10 relative"
      innerContainerClasses="flex flex-col gap-8"
      sectionName="contact"
      isFullWidth
    >
      <Image
        src={topContactWave}
        alt={"decorative waves at top of contact section"}
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "100%",
          left: 0,
        }}
      />
      <div>
        <TitleText DarkMode>Contact Us</TitleText>
        <SubtitleText DarkMode>
          Things are early days for us at the moment but if you are interested
          in partnering with us as an early customer or investor, please reach
          out!
        </SubtitleText>
      </div>
      <form
        className="flex flex-col gap-4"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action={"/success"}
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <InputBox
          id={"htmlName"}
          field={"name"}
          placeholder={"Your Name"}
          inputType={"text"}
        >
          <PersonIcon />
        </InputBox>
        <p className="hidden">
          <label>
            {"Don’t fill this out if you’re human: "}
            <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <InputBox
          id={"htmlEmail"}
          field={"email"}
          placeholder={"Your Email"}
          inputType={"email"}
        >
          <MailIcon />
        </InputBox>
        <InputBox
          id={"htmlPhone"}
          field={"phone"}
          placeholder={"Your phone"}
          inputType={"tel"}
        >
          <PhoneIcon />
        </InputBox>
        <textarea
          required
          className="input input-bordered flex items-center gap-2 min-h-48"
          placeholder="Message"
          name="message"
          id="yourmessage"
        />
        <div data-netlify-recaptcha="true"></div>

        <button
          type="submit"
          value="Submit"
          className="btn btn-primary w-40 mb-4 mx-auto"
        >
          Send
        </button>
      </form>
    </SectionContainer>
  );
};

export default Contact;
