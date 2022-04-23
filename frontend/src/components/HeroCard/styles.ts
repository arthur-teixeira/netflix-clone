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

export const Text = styled.p`
  margin: 1rem auto;
  font-size: 1.125rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      margin: 0 ${theme.margins.sm};
    }
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
    @media (max-width: ${theme.breakpoints.small}) {
    }
  `}
`;

export const Input = styled.input`
  border: 1px solid #cecece;
  padding: 25px;
  width: 500px;

  &::placeholder {
    font-size: 1.125rem;
  }

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
      padding: 1rem;
      border-radius: 3px;
      width: 80%;
      margin: 0 auto
      display: block;
    }
  `}
`;

export const Button = styled.button`
  background: var(--red);
  padding: 16px;
  font-size: 1.875rem;
  border-radius: 3px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 1rem auto;
      width: auto;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      display: block;
    }
  `}
`;
