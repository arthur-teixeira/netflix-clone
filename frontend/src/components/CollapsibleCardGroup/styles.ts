import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  border-bottom: 10px solid var(--gray);
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      margin-top: 1rem;
    }
  `}
`;

export const Title = styled.h1`
  margin: 2rem auto;
  font-size: 3rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 2rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      font-size: 1.625rem;
    }
  `}
`;

export const EmailInputWrapper = styled.li`
  margin: 3rem auto;
  text-align: center;
`;
