import styled from "styled-components";
import { Checkbox } from "antd";
import { ThemeProps } from "utils/theme";

export const SCheckbox = styled(Checkbox)`
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-image-source: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_border_color"]};
    border-image-slice: 1;
    box-shadow: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_box_shadow"]};
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: transparent;
    border-image-source: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_border_color"]};
    border-image-slice: 1;
  }

  .ant-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border-image-source: 1px solid
      ${(props) => ThemeProps[props.theme.mode]["s_checkbox_border_color"]};
    content: "";
    -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
    animation: antCheckboxEffect 0.36s ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    visibility: hidden;
  }

  .ant-checkbox-checked .ant-checkbox-inner:after,
  .ant-checkbox-checked:hover {
    border-color: ${(props) =>
      ThemeProps[props.theme.mode]["s_checkbox_tick_color"]} !important;
    border-image-source: 1px solid
      ${(props) => ThemeProps[props.theme.mode]["s_checkbox_border_color"]};
  }
`;
