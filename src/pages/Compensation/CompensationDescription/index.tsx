import React from "react";
import * as data from "utils/dummies";
import CIcon from "components/Icon";
import * as S from "./styled";
import ListItem from "components/ListItem";

const CompensationDescription: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.StyledMainTitle>{data.mainTitle}</S.StyledMainTitle>
      <S.StyledMainText>
        {data.mainText[0]} <span> {data.mainText[1]} </span>{data.mainText[2]}
      </S.StyledMainText>

      <S.StyledSecondaryContainer>
        <div>
          <S.StyledSecondaryTitle>{data.secondaryTitle}</S.StyledSecondaryTitle>
          <S.StyledSecondaryText>{data.secondaryText}</S.StyledSecondaryText>
        </div>
        <CIcon filename={"img"} />
      </S.StyledSecondaryContainer>
      <S.StyledListContainer>
        {data.list.map((listItem, index) => {
          return <ListItem key={index} plot={listItem} />;
        })}
      </S.StyledListContainer>
    </S.StyledContainer>
  );
};

export default CompensationDescription;
