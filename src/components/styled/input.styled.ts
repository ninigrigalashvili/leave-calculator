import { ThemeProps } from "utils/theme";
import { Input } from "antd";
import styled from 'styled-components'



export const SInput = styled(Input)`
    border: ${(props) => ThemeProps[props.theme.mode]['s_input_border']};
    box-shadow: ${(props) => ThemeProps[props.theme.mode]['s_input_box_shadow']};
    border-radius: ${(props) => ThemeProps[props.theme.mode]['s_input_border_radius']}
`