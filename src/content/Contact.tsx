import MailIcon from '@/ui/icons/mail'
import TitleText from "@/ui/TitleText";

const Contact = () => {
  return (
    <section
      className="h-fit flex flex-col gap-2 max-w-3xl mx-auto"
      id="contact"
    >
      <div>
        <TitleText>Contact Us</TitleText>
        <p>
          Things are early days for us at the moment but if you are interested
          in partnering with us as an early customer or investor, please reach
          out!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-row gap-4 justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex m-auto h-fit items-center gap-2">
            <MailIcon />
            <h3 className="text-3xl">Email</h3>
          </div>
          <p>
            <a href="mailto:contact@brontosource.dev">
              contact@brontosource.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact