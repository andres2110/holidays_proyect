import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const S = {
    HeaderWrapper: styled.header`
    display: flex;
    align-items: center;
    height: 65px;
    background: #92DCCD;
    color: white;
    padding: 20px;
    `,
    Title: styled.h2`
    font-size: 30px;
    margin-right: auto;
    `,
    ButtonWrapper: styled(Link)`
        margin-left: 15px;
        color: white;
        font-size: 18px;
        text-decoration: none;
        /* background-color: #FFE9CA; */
        height: 100%;
    `,
    IconWrapper: styled(BeachAccessIcon)`
        margin-left: 5px;
    ` 
}
export default function Header() {
    return (
        <S.HeaderWrapper>
            <S.Title>Next Holiday
            <S.IconWrapper fontSize="large"/>
            </S.Title>
            <S.ButtonWrapper to = "/">Holidays</S.ButtonWrapper>
            <S.ButtonWrapper to = "/favorites">Favorites</S.ButtonWrapper>
        </S.HeaderWrapper>
    )
}