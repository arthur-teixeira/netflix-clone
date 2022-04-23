import tv from "../../assets/tv.png";
import mobile from "../../assets/mobile.jpg";
import bundle from "../../assets/device-pile.png";
import infant from "../../assets/infant.png";
import { SecondaryCardProps } from "../../components/SecondaryCard/SecondaryCard";

export default [
  {
    title: "Aproveite na TV.",
    subtitle:
      "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
    resource: tv,
    leftToRight: true,
  },
  {
    title: "Baixe séries para assistir offline.",
    subtitle: "Salve seus títulos favoritos e sempre tenha algo para assistir.",
    resource: mobile,
    leftToRight: false,
  },
  {
    title: "Assista quando quiser.",
    subtitle:
      "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
    resource: bundle,
    leftToRight: true,
  },
  {
    title: "Crie perfis para crianças.",
    subtitle:
      "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
    resource: infant,
    leftToRight: false,
  },
] as SecondaryCardProps[];
