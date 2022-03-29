import React from "react"
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getFavoritesInfo } from '../../redux/selectors'
import ListOFHolidays from "../commons/ListOFHolidays";

const S = {
    TitleCountry: styled.h4`
        color: white;
        font-weight: 400;
        font-size: 20px;
    `,
    FavoritesInfo: styled.div`
        background-color: #afe4d9c8;
        margin-left: 10px;
        padding: 5px 5px 5px;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* justify-items: center; */
    `
}

export default function ListOfFavorites() {
    let aHolidaysToDisplay = useSelector(getFavoritesInfo);
    return aHolidaysToDisplay.length === 0 ? (<div>No favorites added</div>) : aHolidaysToDisplay.map((favorite) => {
        return (
            <S.FavoritesInfo key={favorite.country}>
                <S.TitleCountry>{favorite.country}</S.TitleCountry>
                <ListOFHolidays holidays={favorite.holidays} gridSize={2} />
            </S.FavoritesInfo>
        )
    })



}