import React from "react";
import MainPage from "./_sections/mainPage";
import HowItWorks from "./_sections/howItWorks";
import Feature from "./_sections/Features";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <MainPage />
      <HowItWorks />
      <Feature/>
      <Footer />
    </>
  );
}
