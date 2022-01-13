import React from "react";
import * as S from "./styled";
import CIcon from "../Icon/index";

type Props = {
  plot: string | Array<string>;
};

const ListItem: React.FC<Props> = ({ plot }) => {
  return (
    <>
      {typeof plot === "string" ? (
        <S.StyledListItem type={"bulletRed"}>
          <CIcon filename={"bulletRed"} />
          <S.StyledListText>{plot}</S.StyledListText>
        </S.StyledListItem>
      ) : (
        plot.map((innerText, index) => {
          return (
            <S.StyledListItem type={"bulletWhite"} key={index}>
              <CIcon filename={"bulletWhite"} />
              <S.StyledListText>{innerText}</S.StyledListText>
            </S.StyledListItem>
          );
        })
      )}
    </>
  );
};

export default ListItem;
