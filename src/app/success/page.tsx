import Button from "@/ui/button";
import TitleText from "@/ui/TitleText";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <main className="flex flex-col items-center justify-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100 h-[calc(100vh-260px)]">
      <div className="mx-auto flex flex-col justify-center items-center gap-6">
        <TitleText>Thank you for your submission!</TitleText>
        <Button link={"/"}>Back to Home Page</Button>
      </div>
    </main>
  );
};

export default SuccessPage;
