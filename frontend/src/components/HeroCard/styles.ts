import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80%;
  border-bottom: 10px solid var(--gray);
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  max-width: 800px;
`;

export const Subtitle = styled.h2`
  max-width: 800px;
  margin: 1rem auto;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Text = styled.p`
  margin: 1rem auto;
  font-size: 1.125rem;
`;

export const Content = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 750px;
  @media (max-width: 720px) {
    width: 500px;
    display: block;
  }
`;

export const Input = styled.input`
  border: 1px solid #cecece;
  padding: 1.5rem;
  width: 75%;

  &::placeholder {
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
  background: var(--red);
  padding: 15px;
  width: 25%;
  font-size: 1.875rem;
  @media (max-width: 720px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;
