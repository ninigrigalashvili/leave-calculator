import { ThemeProps } from "utils/theme";
import styled from 'styled-components'

export const SCard = styled.div`
    padding: ${(props) => ThemeProps[props.theme.mode]['s_card_padding']};
    background-color: ${(props) => ThemeProps[props.theme.mode]['s_card_background_color']};
`