import { LogoWhite } from "@/ui/icons/logo-white";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-info flex flex-col justify-center items-center h-40">
      <Link
        href="/"
        className="text-white font-bold text-2xl"
        aria-label="Navigate to Home Page of BrontoSource.dev"
      >
        <LogoWhite />
      </Link>
      <div className="text-center">
        <p className="italic mt-4">&copy; 2024 BrontoSource</p>
      </div>
    </footer>
  );
};

export default Footer;
