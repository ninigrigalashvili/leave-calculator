import { ThemeProps } from "utils/theme";
import { Button } from "antd";
import styled from "styled-components";

export const SButton = styled(Button)`
  background: ${(props) =>
    ThemeProps[props.theme.mode]["s_button_background_color"]};
  border: none;
  border-radius: 30px;
  color: ${(props) => ThemeProps[props.theme.mode]["s_button_color"]};
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  line-height: 20px;
  margin-top: 20px;
  padding: 20px 40px;
  width: 169px;
`;
