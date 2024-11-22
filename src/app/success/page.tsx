import TitleText from "@/ui/TitleText";
import React from "react";

const SuccessPage = () => {
  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100">
      <TitleText>Thank you for your submission!</TitleText>
    </main>
  );
};

export default SuccessPage;
