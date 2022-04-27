import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 80%;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-top: 5rem;
      height: 70%;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      margin-top: 3rem;
      height: 30%;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  max-width: 800px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 3rem;
      margin: 0 ${theme.margins.sm};
    }
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1.75rem;
    }
  `}
`;

export const Subtitle = styled.h2`
  max-width: 800px;
  margin: 1rem auto;
  font-weight: 400;
  font-size: 1.5rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1.125rem;
    }
  `}
`;
