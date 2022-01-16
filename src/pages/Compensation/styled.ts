import styled from "styled-components";

export const SCompensation = styled.div`
  display: grid;
  grid-template-columns: 18fr 6fr;
  gap: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(100px, auto);
  }

  @media screen and (min-width: 769px) and (max-width: 1441px) {
    gap: 20px;
    grid-template-columns: 6fr auto;
  }
`;
