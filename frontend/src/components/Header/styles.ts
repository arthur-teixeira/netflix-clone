import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 3.5rem;
  padding-top: 2rem;
  height: 10vh;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0 2rem;
    }
    @media (max-width: ${theme.breakpoints.small}) {
      margin: 0 1rem;
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

export const LanguageSelect = styled.select`
  background: transparent;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid #fff;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      padding: 0.25rem;
    }
  `}
`;

export const LanguageOption = styled.option`
  background: rgba(0, 0, 0, 0.4);
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
