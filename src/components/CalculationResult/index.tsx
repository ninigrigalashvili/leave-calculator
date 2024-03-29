import React from "react";
import * as S from "./styled";
import { amountFormatter } from "utils/amountFormatter";

type Props = {
  employerDays: number;
  insuranceDays: number;
  totalCompensation: number;
  dailyAllowance: number;
  totalDays: number;
};

const CalculationResult: React.FC<Props> = (props) => {
  const employerCompensation = React.useMemo(() => {
    return props.employerDays * props.dailyAllowance;
  }, [props.dailyAllowance, props.employerDays]);

  const insuranceCompensation = React.useMemo(() => {
    return props.insuranceDays ? props.insuranceDays * props.dailyAllowance : 0;
  }, [props.dailyAllowance, props.insuranceDays]);

  return (
    <S.ResultContainer>
      <S.Border />
      <S.Calculations>
        <S.EmployerCompensation>
          <S.DaysQuantity>
            <div>The employer compensates</div>
            <S.Days>{props.employerDays} days</S.Days>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <S.CompensatesNumber>
              {amountFormatter(employerCompensation)} €
            </S.CompensatesNumber>
            <S.DailyAllowanceDetails>Daily allowance</S.DailyAllowanceDetails>
            <S.DailyAllowanceDetails>
              {amountFormatter(props.dailyAllowance)} €
            </S.DailyAllowanceDetails>
          </S.DailyAllowance>
        </S.EmployerCompensation>
        <S.InsuranceCompensation>
          <S.DaysQuantity>
            <div>Health Insurance compensates</div>
            <S.Days>{amountFormatter(props.insuranceDays)} days</S.Days>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <S.CompensatesNumber>
              {amountFormatter(insuranceCompensation)} €
            </S.CompensatesNumber>
            <S.DailyAllowanceDetails>Daily allowance</S.DailyAllowanceDetails>
            <S.DailyAllowanceDetails>
              {amountFormatter(props.dailyAllowance)} €
            </S.DailyAllowanceDetails>
          </S.DailyAllowance>
        </S.InsuranceCompensation>
      </S.Calculations>
      <S.Border />
      <S.TotalCompensation>
        <S.CompensationDaysResult>
          Compensation total for {props.totalDays} days (net)
        </S.CompensationDaysResult>
        <S.SubTotal>{amountFormatter(props.totalCompensation)} €</S.SubTotal>
      </S.TotalCompensation>
    </S.ResultContainer>
  );
};

export default CalculationResult;
