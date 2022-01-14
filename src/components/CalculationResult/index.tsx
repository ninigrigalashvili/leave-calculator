import React from "react";
import * as S from "./styled";

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
            The employer compensates <br />
            <span className="days">{props.employerDays} days</span>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <span className="compensates-number">
              {employerCompensation.toFixed(2)}€
            </span>
            <br />
            <span className="daily-allowance">
              Daily allowance {props.dailyAllowance.toFixed(2)} €
            </span>
          </S.DailyAllowance>
        </S.EmployerCompensation>
        <S.InsuranceCompensation>
          <S.DaysQuantity>
            Health Insurance compensates <br />
            <span className="days">{props.insuranceDays} days</span>
          </S.DaysQuantity>
          <S.DailyAllowance>
            <span className="compensates-number">
              {insuranceCompensation.toFixed(2)}€
            </span>
            <br />
            <span className="daily-allowance">
              Daily allowance {props.dailyAllowance.toFixed(2)}€
            </span>
          </S.DailyAllowance>
        </S.InsuranceCompensation>
      </S.Calculations>
      <S.Border />
      <S.TotalCompensation>
        <S.CompensationDaysResult>
          Compensation total for {props.totalDays} days (net)
        </S.CompensationDaysResult>
        <S.SubTotal>{props.totalCompensation.toFixed(2)}</S.SubTotal>
      </S.TotalCompensation>
    </S.ResultContainer>
  );
};

export default CalculationResult;
