import React from "react";
import { SForm } from "components/styled/form.styled";
import { SButton } from "components/styled/button.styled";
import { SInput } from "components/styled/input.styled";
import { SCard } from "components/CCard/styled";
import { SSpace } from "components/styled/space.styled";
import CIcon from "components/Icon";
import { Checkbox } from "antd";
import * as S from "./styled";

const CompensationCard: React.FC = () => {
  const [isTuberculosis, setIsTuberculosis] = React.useState(false);

  const onFinish = (values) => {
    console.log(values);
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
        <SForm.Item name={"is_tuberbulosis"} valuePropName="checked">
          <Checkbox>I have Tuberculosis</Checkbox>
        </SForm.Item>
        <SForm.Item>
          <SButton htmlType="submit">Calculate</SButton>
        </SForm.Item>
      </SForm>
    </SCard>
  );
};

export default CompensationCard;
