import styled from "styled-components";

export const SCompensation = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
