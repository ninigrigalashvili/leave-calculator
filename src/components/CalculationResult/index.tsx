import React from "react";
import GlobalStyles from "../../app.styled";
import CompensationPage from "pages/Compensation";
import * as S from "./styled";

const CalculationResult: React.FC = () => {
  return (
    <S.ResultContainer>
      <S.Border />
      <S.Calculations>
        <S.EmployerCompensation>
          <S.DaysQuantity>
            The employer compensates <br />
            <span className="days">4 days</span>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <span className="compensates-number">112,00€</span>
            <br />
            <span className="daily-allowance">Daily allowance 28,00 €</span>
          </S.DailyAllowance>
        </S.EmployerCompensation>
        <S.InsuranceCompensation>
          <S.DaysQuantity>
            Health Insurance compensates <br />
            <span className="days">0 days</span>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <span className="compensates-number">0,00€</span>
            <br />
            <span className="daily-allowance">Daily allowance 28,00 €</span>
          </S.DailyAllowance>
        </S.InsuranceCompensation>
      </S.Calculations>
      <S.Border />
      <S.TotalCompensation>
        <S.CompensationDaysResult>
          Compensation total for 7 days (net)
        </S.CompensationDaysResult>
        <S.SubTotal>112,00€</S.SubTotal>
      </S.TotalCompensation>
    </S.ResultContainer>
  );
};

export default CalculationResult;
