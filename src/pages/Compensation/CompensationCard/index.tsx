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
import CalculationResult from "components/CalculationResult";

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
      }
    } else {
      if (values.leave_days > insuranceDuration) {
        values.leave_days = insuranceDuration;
      }
    }
    setTotalDays(values.leave_days);
    const compensationRate = values.average_income * 0.7;
    const dayGrossCompensation = compensationRate / monthDays;
    const dayNetCompensation = calculateNet(dayGrossCompensation);
    setDailyAllowance(dayNetCompensation);

    if (values.leave_days <= 3) {
      setEmployerDays(0);
      setInsuranceDays(0);
      setTotalCompensation(0);
      setDailyAllowance(0);
    } else if (values.leave_days > 3 && values.leave_days < 9) {
      setEmployerDays(values.leave_days - 3);
      setInsuranceDays(0);
      setTotalCompensation((values.leave_days - 3) * dayNetCompensation);
    } else if (values.leave_days >= 9) {
      setEmployerDays(5);
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
          className="average-income"
        >
          <SInput
            type={"number"}
            min={0}
            suffix={<CIcon filename={"euro"} className="suf-average" />}
          />
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
          className="leave-days"
        >
          <SInput
            type={"number"}
            min={0}
            suffix={<CIcon filename={"days"} className="suf-days" />}
          />
        </SForm.Item>
        <SForm.Item
          name={"is_tuberculosis"}
          valuePropName="checked"
          className="tuber-check"
        >
          <Checkbox>I have Tuberculosis</Checkbox>
        </SForm.Item>
        <SForm.Item>
          <SButton htmlType="submit">Calculate</SButton>
        </SForm.Item>
        <CalculationResult
          employerDays={employerDays}
          insuranceDays={insuranceDays}
          totalCompensation={totalCompensation}
          dailyAllowance={dailyAllowance}
          totalDays={totalDays}
        />
      </SForm>
    </SCard>
  );
};

export default CompensationCard;
