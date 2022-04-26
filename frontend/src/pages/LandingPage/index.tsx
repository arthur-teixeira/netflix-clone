import CollapsibleCardGroup from "../../components/CollapsibleCardGroup";
import Header from "../../components/Header";
import HeroCard from "../../components/HeroCard";
import SecondaryCard from "../../components/SecondaryCard";
import secondaryCards from "./secondaryCards";
import { BgImage, BgGradient } from "./styles";

const LandingPage = () => {
  return (
    <>
      <BgImage>
        <BgGradient />
      </BgImage>
      <div style={{ height: "90vh" }}>
        <Header />
        <HeroCard />
      </div>
      {secondaryCards.map((card) => (
        <SecondaryCard {...card} key={card.order} />
      ))}
      <CollapsibleCardGroup />
    </>
  );
};

export default LandingPage;
