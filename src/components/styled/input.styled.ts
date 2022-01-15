import { ThemeProps } from "utils/theme";
import { Input } from "antd";
import styled from "styled-components";

export const SInput = styled(Input)`
  border-image-source: ${(props) =>
    ThemeProps[props.theme.mode]["s_input_border_image_source"]};
  border-image-slice: 1;
  border-style: solid;
  outline: none;
  box-shadow: ${(props) => ThemeProps[props.theme.mode]["s_input_box_shadow"]};
  border-radius: ${(props) =>
    ThemeProps[props.theme.mode]["s_input_border_radius"]};
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  input {
    border: none;
    background: transparent;
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
