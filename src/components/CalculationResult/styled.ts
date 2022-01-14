import styled from "styled-components";

export const ResultContainer = styled.div``;

export const Calculations = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  left: 0;
  right: 0;
  padding: 19px 20px 20px 20px;
`;

export const Border = styled.div`
  width: 100%;
  border-radius: 0px 0px 12px 2px;
  height: 1px;
  background: #e9edf4;
  position: absolute;
  left: 0;
`;

export const EmployerCompensation = styled.div`
  width: 130px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const InsuranceCompensation = styled.div`
  width: 130px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const DaysQuantity = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  .days {
    font-weight: 700;
  }
`;

export const DailyAllowance = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 90px;
  .compensates-number {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }
  .daily-allowance {
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    color: #7a818e;
  }
  .daily-number {
  }
`;

export const TotalCompensation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const CompensationDaysResult = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  color: #111317;
`;

export const SubTotal = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #111317;
  margin-top: 5px;
`;
