import { Form } from "antd";
import styled from "styled-components";
import { ThemeProps } from "utils/theme";

export const SForm = styled(Form)`
  .ant-form-item-explain-error {
    color: ${(props) =>
      ThemeProps[props.theme.mode]["s_form_input_error_color"]};
    font-size: 12px;
    margin-top: 5px;
  }
`;
