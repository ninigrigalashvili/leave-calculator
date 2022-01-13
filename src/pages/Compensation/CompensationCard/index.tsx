import React from "react";
import { SForm } from "components/styled/form.styled";
import { SButton } from "components/styled/button.styled";
import { SInput } from "components/styled/input.styled";
import { SCard } from "components/CCard/styled";
import {
  insuranceDuration,
  tubercInsuranceDuration,
  monthDays,
} from "utils/constants";
import CIcon from "components/Icon";
import { Checkbox } from "antd";
import { calculateNet } from "utils/calculations";
import * as S from "./styled";

const CompensationCard: React.FC = () => {
  const [employerDays, setEmployerDays] = React.useState(0);
  const [insuranceDays, setInsuranceDays] = React.useState(0);
  const [totalCompensation, setTotalCompensation] = React.useState(0);
  const [totalDays, setTotalDays] = React.useState(0);
  const [dailyAllowance, setDailyAllowance] = React.useState(0);

  const onFinish = (values) => {
    if (values.is_tuberculosis) {
      if (values.leave_days > tubercInsuranceDuration) {
        values.leave_days = tubercInsuranceDuration;
        setTotalDays(tubercInsuranceDuration);
      }
    } else {
      if (values.leave_days > insuranceDuration) {
        values.leave_days = insuranceDuration;
        setTotalDays(insuranceDuration);
      }
    }

    setTotalDays(values.leave_days);
    const compensationRate = values.average_income * 0.7;
    const dayGrossCompensation = compensationRate / monthDays;
    const dayNetCompensation = calculateNet(dayGrossCompensation);
    setDailyAllowance(dayNetCompensation);
    console.log("dayNetCompensation", dayNetCompensation);
    if (values.leave_days > 3 && values.leave_days < 9) {
      setEmployerDays(values.leave_days);
      setTotalCompensation((values.leave_days - 3) * dayNetCompensation);
    } else if (values.leave_days >= 9) {
      setEmployerDays(8);
      setInsuranceDays(values.leave_days - 8);
      setTotalCompensation((values.leave_days - 3) * dayNetCompensation);
    }
  };

  return (
    <SCard>
      <SForm
        layout={"vertical"}
        hideRequiredMark={true}
        autoComplete="off"
        onFinish={onFinish}
      >
        <S.Title>Compensation Calculator</S.Title>
        <SForm.Item
          name={"average_income"}
          label={"Average Income"}
          rules={[
            {
              required: true,
              message: "Gross Income is Required",
            },
          ]}
        >
          <SInput suffix={<CIcon filename={"euro"} />} />
        </SForm.Item>
        <SForm.Item
          name={"leave_days"}
          label={"Days on sick-leave"}
          rules={[
            {
              required: true,
              message: "Sick Leave Days are Required",
            },
          ]}
        >
          <SInput suffix={<CIcon filename={"days"} />} />
        </SForm.Item>
        <SForm.Item name={"is_tuberculosis"} valuePropName="checked">
          <Checkbox>I have Tuberculosis</Checkbox>
        </SForm.Item>
        <SForm.Item>
          <SButton htmlType="submit">Calculate</SButton>
        </SForm.Item>
      </SForm>

      <div>employerDays: {employerDays}</div>
      <div>insuranceDays: {insuranceDays}</div>
      <div>totalCompensation: {totalCompensation.toFixed(2)}</div>
      <div>dailyAllowance: {dailyAllowance.toFixed(2)}</div>
      <div>Compensation for total days {totalDays || 0} NET</div>
    </SCard>
  );
};

export default CompensationCard;
