import styled, { css } from "styled-components";

export const StyledListItem = styled.div<{ type: string }>`
  display: flex;
  gap: 9px;
  align-items: center;

  ${(props) => {
    switch (props.type) {
      case "bulletWhite": {
        return css`
          margin-left: 30px;
        `;
      }
    }
  }}
`;

export const StyledListText = styled.p`
  color: #ffff;
  font-size: 18px;
`;
