import { ThemeProps } from "utils/theme";
import { Button } from "antd";
import styled from 'styled-components'


export const SButton = styled(Button)`
    background: ${(props) => ThemeProps[props.theme.mode]['s_button_background_color']}
    color: ${(props) => ThemeProps[props.theme.mode]['s_button_color']}
    width: 169px;
    height: 60px;
    border-radius: 30px;
    padding: 20px 40px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    color: #ffffff;
    border: none;
    background: linear-gradient(90deg, #911812 0%, #E1261C 100%);
    cursor: pointer;
    margin-top: 20px;
`