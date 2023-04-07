import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
flex:1%;
background-color: ${({theme})=> theme.COLORS.GRAY_600};
padding: 24px;
`

export const Form = styled.View`
width: 100%;
background-color: ${({theme})=> theme.COLORS.GRAY_700};

flex-direction: row;
align-items:center;
justify-content: center;
`

export const HeaderList = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: space-between;

margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
${({theme})=> css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};

`}
`