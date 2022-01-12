import React from "react";
import { SForm } from "components/styled/form.styled";
import { SButton } from "components/styled/button.styled";
import { SInput } from "components/styled/input.styled";
import { SCard } from "components/CCard/styled";

const CompensationCard:React.FC = () => {
    return (
       <SCard>
            <SForm 
            layout={'vertical'}
            hideRequiredMark={true}
            autoComplete="off"
            onFinish={(values) => console.log('values', values)}
        >
            <SForm.Item
                name={'average_income'}
                rules={[
                    {
                        required: true,
                        message: 'Gross Income is Required'
                    }

                ]}
            >
                <SInput />
            </SForm.Item>
            <SForm.Item
                name={'leave_days'}
                rules={[
                    {
                        required: true,
                        message: 'Sick Leave Days are Required'
                    }
                ]}
            >
                <SInput />
            </SForm.Item>
            <SForm.Item>
                <SButton>Calculate</SButton>
            </SForm.Item>
        </SForm>
       </SCard>
    )
}

export default CompensationCard