import React from "react"
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getFavoritesInfo } from '../../redux/selectors'
import ListOFHolidays from "../commons/ListOFHolidays";

const S = {
    TitleCountry: styled.h4`
        color: black;
        font-size: 20px;
    `,
    FavoritesInfo: styled.div`
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
}

export default function ListOfFavorites() {
    let aHolidaysToDisplay = useSelector(getFavoritesInfo);
    return aHolidaysToDisplay.length === 0 ? (<div>No favorites added</div>) : aHolidaysToDisplay.map((favorite) => {
        return (
        <S.Container>
            <S.TitleCountry>{favorite.country}</S.TitleCountry>
            <S.FavoritesInfo key={favorite.country}>
                <ListOFHolidays holidays={favorite.holidays} gridSize={2} printMonth={true} />
            </S.FavoritesInfo>
        </S.Container>

        )
    })



}