import React from "react";
import Header from "../../components/Header";
import HeroCard from "../../components/HeroCard";
import { BgImage, BgGradient } from "./styles";

const LandingPage = () => {
  return (
    <>
      <BgImage>
        <BgGradient />
      </BgImage>
      <div style={{ height: "100vh" }}>
        <Header />
        <HeroCard />
      </div>
    </>
  );
};

export default LandingPage;
