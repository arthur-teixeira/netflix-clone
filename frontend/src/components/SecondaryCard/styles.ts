import styled, { css } from "styled-components";

type ContentProps = {
  leftToRight: boolean;
};

export const Wrapper = styled.div`
  border-bottom: 10px solid var(--gray);
  padding: 0 5rem;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ leftToRight }) => (leftToRight ? "row" : "row-reverse")};
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.625rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Text = styled.div`
  width: 50%;
`;
