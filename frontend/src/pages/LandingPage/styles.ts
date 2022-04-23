import styled, { css } from "styled-components";
import background from "../../assets/landing-background.jpg";

export const BgImage = styled.div`
  margin: 0;
  height: 90vh;
  background: url(${background}) no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  display: block;
  width: 100%;
  filter: brightness(0.5);
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: 80vh;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      height: 60vh;
    }
  `}
`;

export const BgGradient = styled.div`
  position: relative;
  top: 0;
  right: 0;
  height: 90vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-bottom: 10px solid var(--gray);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: 80vh;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      height: 60vh;
    }
  `}
`;
