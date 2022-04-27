import styled, { css } from "styled-components";

export const Select = styled.select`
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

export const Option = styled.option`
  background: rgba(0, 0, 0, 0.4);
`;
