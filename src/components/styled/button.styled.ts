import { ThemeProps } from "utils/theme";
import { Button } from "antd";
import styled from 'styled-components'


export const SButton = styled(Button)`
    background: ${(props) => ThemeProps[props.theme.mode]['s_button_background_color']}
    color: ${(props) => ThemeProps[props.theme.mode]['s_button_color']}
`