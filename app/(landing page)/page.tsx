import React from "react";
import MainPage from "./sections/mainPage";
import HowItWorks from "./sections/howItWorks";
import Feature from "./sections/Features";
import Footer from "./components/Footer";

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
