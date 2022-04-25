import styled, { css } from "styled-components";

type ContentProps = {
  leftToRight: boolean;
};

export const Wrapper = styled.div`
  border-bottom: 10px solid var(--gray);
  padding: 0 5rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0 2rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      padding: 0 1rem;
    }
  `}
`;

export const Content = styled.div<ContentProps>`
  ${({ theme, leftToRight }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${leftToRight ? "row" : "row-reverse"};
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 0;

    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 2rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1.625rem;
    }
  `}
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.625rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1.125rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 50%;
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 100%;
    }
  `}
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Text = styled.div`
  ${({ theme }) => css`
    width: 50%;
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 100%;
    }
  `}
`;
