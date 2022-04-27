import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

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
