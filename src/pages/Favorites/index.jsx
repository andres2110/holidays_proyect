import React from "react";
import LisOfFavorites from "../../components/favorites/ListOfFavorites"
import styled from "styled-components";
const S = {
    FavoritesContainer: styled.div`
        margin-top: 20px;
        display: grid;
        grid-template: auto auto / repeat(4, 4fr);
        gap: 10px;
        padding-left: 30px;
        justify-content: center;
    `,
}
export default function MainPage() {

    return (
        <S.FavoritesContainer >
            <LisOfFavorites />
        </S.FavoritesContainer>)
}