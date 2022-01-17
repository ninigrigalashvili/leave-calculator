import { ThemeProps } from "utils/theme";
import { Button } from "antd";
import styled from "styled-components";

export const SButton = styled(Button)`
  background: ${(props) =>
    ThemeProps[props.theme.mode]["s_button_background_color"]};
  border-radius: 30px;
  color: ${(props) => ThemeProps[props.theme.mode]["s_button_color"]};
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  line-height: 20px;
  margin-top: 20px;
  padding: 20px 40px;
  width: 169px;
  text-shadow: ${(props) =>
    ThemeProps[props.theme.mode]["s_button_text_shadow"]};

  &:focus,
  &:hover {
    background: ${(props) =>
      ThemeProps[props.theme.mode]["s_button_background_color"]};
    color: ${(props) => ThemeProps[props.theme.mode]["s_button_color"]};
    border: none;
  }
`;
