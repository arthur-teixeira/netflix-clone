import tv from "../../assets/tv.png";
import mobile from "../../assets/mobile.jpg";
import bundle from "../../assets/device-pile.png";
import infant from "../../assets/infant.png";
import { SecondaryCardProps } from "../../components/SecondaryCard/SecondaryCard";

export default [
  {
    order: "first",
    resource: tv,
    leftToRight: true,
  },
  {
    order: "second",
    resource: mobile,
    leftToRight: false,
  },
  {
    order: "third",
    resource: bundle,
    leftToRight: true,
  },
  {
    order: "fourth",
    resource: infant,
    leftToRight: false,
  },
] as SecondaryCardProps[];
