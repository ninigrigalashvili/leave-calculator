import { ThemeProps } from "utils/theme";
import { Input } from "antd";
import styled from 'styled-components'



export const SInput = styled(Input)`
    border-image-source: ${(props) => ThemeProps[props.theme.mode]['s_input_border_image_source']};
    border-width: 2px;
    border-image-slice: 1;
    border-style: solid;
    outline: none;
    box-shadow: ${(props) => ThemeProps[props.theme.mode]['s_input_box_shadow']};
    border-radius: ${(props) => ThemeProps[props.theme.mode]['s_input_border_radius']};
    width: 100%;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 11fr 1fr;

    input {
        border: none;
        background: transparent;
        outline: none;
    }

`