import styled from "styled-components";
import { Checkbox } from "antd";
import { ThemeProps } from "utils/theme";

export const SCheckbox = styled(Checkbox)`
  &:hover .ant-checkbox-inner,
  .ant-checkbox-inner,
  &:focus .ant-checkbox-inner {
    border: double 2px transparent;
    border-radius: 2px;
    background-image: linear-gradient(white, white),
      ${(props) => ThemeProps[props.theme.mode]["s_checkbox_border_color"]};
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_box_shadow"]};
  }

  /* .ant-checkbox-input {
    &:focus {
      outline: none !important;
    }
  } */

  .ant-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
    animation: antCheckboxEffect 0.36s ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    visibility: hidden;
  }

  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_tick_color"]} !important;
  }
`;
