import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 815px;
  margin: 3rem auto 1rem;
  & * {
    color: var(--light-gray);
  }
  & > select {
    margin: 1rem 0;
    border: 1px solid var(--light-gray);
    & > option {
      color: #fff;
      background: #000;
    }
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 3rem 2rem 1rem;
    }
  `}
`;

export const FooterTop = styled.p`
  margin-bottom: 2rem;
`;

export const FooterTopicList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: ${theme.breakpoints.medium}) {
      grid-gap: 0 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${theme.breakpoints.small}) {
      grid-gap: 0 5px;
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const FooterTopic = styled.li`
  margin: 10px 0;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const FooterBottom = styled.p`
  font-size: 13px;
  margin: 1rem 0;
`;
