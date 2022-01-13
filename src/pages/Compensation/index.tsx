import React from "react";
import { SContainer } from "components/PageContainer/styled";
import * as S from "./styled";
import CompensationDescription from "pages/CompensationDescription";
import CompensationCard from "./CompensationCard";

const CompensationPage: React.FC = () => {
  return (
    <SContainer>
      <S.SCompensation>
        <CompensationDescription />
        <CompensationCard />
      </S.SCompensation>
    </SContainer>
  );
};

export default CompensationPage;
