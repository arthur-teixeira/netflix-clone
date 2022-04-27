import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 ${theme.margins.lg};
    padding-top: 2rem;
    height: 10vh;
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0 ${theme.margins.md};
      height: 0;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      margin: 0 ${theme.margins.sm};
      height: 10vh;
    }
  `}
`;

export const SubWrapper = styled.div``;

export const Logo = styled.img`
  height: 3rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      height: 2.5rem;
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      height: 2rem;
    }
  `}
`;

export const SignInButton = styled.button`
  padding: 10px 17px;
  border: none;
  background: var(--red);
  margin-left: 1rem;
  color: #fff;
  border-radius: 3px;
  font-weight: 400;
  font-size: 1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0.5rem;
    }

    @media (max-width: ${theme.breakpoints.small}) {
      font-size: auto;
      padding: 0.25rem 0.5rem;
    }
  `}
`;
