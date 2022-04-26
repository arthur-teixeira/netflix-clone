import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  max-width: 815px;
  margin: 0.5rem auto;
  & * {
    font-weight: 400;
    font-size: 1.5rem;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      & * {
        max-width: 500px;
        font-size: 1.25rem;
      }
    }
    @media (max-width: ${theme.breakpoints.small}) {
      & * {
        font-size: 1.125rem;
      }
    }
  `}
`;

export const Button = styled.button`
  padding: 1.75rem;
  background: var(--gray);
  width: 100%;
  text-align: left;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0.5rem auto;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      padding: 1.25rem;
    }
  `}
`;

export const Content = styled.p`
  max-width: 815px;
  margin: 0 auto;
  margin-top: 1px;
  padding: 1.75rem;
  line-height: 1.2;
  background: var(--gray);
  & p {
    margin-bottom: 1rem;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 1.5rem;
      max-width: 500px;
      padding: 1.5rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      padding: 1.25rem;
    }
  `}
`;
