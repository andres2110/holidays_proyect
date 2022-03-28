import React from "react"
import Holiday from '../commons/Holiday';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getFavoritesInfo } from '../../redux/selectors'

const S = {
    FavoritesContainer: styled.div`
        margin-top: 20px;
        display: grid;
        grid-template: auto auto / repeat(3, 5fr);
        gap: 20px;
        padding-left: 30px;
        justify-content: center;
    `,
    ListOfHoliday: styled.div`
        margin-top: 20px;
        display: grid;
        grid-template: auto auto / repeat(3, 5fr);
        gap: 20px;
        justify-content: center;
        align-items: center;
        

    `,
    TitleCountry: styled.h4`
        color: white;
        font-weight: 400;
        font-size: 20px;
    `,
    FavoritesInfo: styled.div`
        background-color: #afe4d9c8;
        margin-left: 20px;
        padding: 5px 5px 5px;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-items: center;
    `
}

export default function ListOfFavorites() {
    let aHolidaysToDisplay = useSelector(getFavoritesInfo);
    console.log(aHolidaysToDisplay)



    const getStyles = (length)=>{
        let styles = {
            gridTemplate: length > 2 ? "auto auto / repeat(7, 5fr)" :
                `auto auto / repeat(${length}, 5fr)`
        }
        return styles;
    }
    return (
        <S.FavoritesContainer >
            {aHolidaysToDisplay.map((favorite) => {
                return (
                    <S.FavoritesInfo key={favorite.country}>
                        <S.TitleCountry>{favorite.country}</S.TitleCountry>
                        <S.ListOfHoliday style={getStyles(favorite.holidays.length)}>
                            {favorite.holidays.map((holiday) => {
                                let iNumberDate = holiday.date.split('-')[2] !== undefined ? holiday.date.split('-')[2] : ''
                                return (<Holiday
                                    name={holiday.name}
                                    date={iNumberDate}
                                    key={holiday.id}
                                    isFavorite={holiday.isFavorite}
                                    id={holiday.id} />)
                            })}
                        </S.ListOfHoliday>
                    </S.FavoritesInfo>
                )
            })}
        </S.FavoritesContainer>
    )

}