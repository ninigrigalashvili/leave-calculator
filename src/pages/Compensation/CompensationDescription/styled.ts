import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledMainTitle = styled.h1`
  color: #ffff;
  font-size: 40px;
`;

export const StyledMainText = styled.p`
  font-size: 18px;
  color: #ffffff;

  span {
    color: #e1261c;
    border-bottom: 1px solid #e1261c;
  }
`;

export const StyledSecondaryContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

export const StyledSecondaryTitle = styled.h2`
  color: #ffff;
  font-size: 32px;
`;

export const StyledSecondaryText = styled.p`
  color: #ffff;
  font-size: 18px;
`;

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
