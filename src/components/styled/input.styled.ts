import { ThemeProps } from "utils/theme";
import { Input } from "antd";
import styled from "styled-components";

export const SInput = styled(Input)`
  border-radius: ${(props) =>
    ThemeProps[props.theme.mode]["s_input_border_radius"]};
  background: ${(props) =>
    ThemeProps[props.theme.mode]["s_input_border_image_source"]};
  background-clip: padding-box;

  input {
    position: relative;
    height: 50px;
    padding-left: 10px !important;
    padding-right: 60px !important;
  }

  &.ant-input-affix-wrapper {
    padding: 2px;
    border: none;

    &:hover,
    &:focus,
    &:after {
      border: none;
      box-shadow: none;
      outline: none;
    }
  }

  .ant-input-suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
