import React from "react"
import Holiday from './Holiday';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getHolidaysFromAPI } from '../../redux/actions/holidays'
import { getHolidaysToDisplay, getCityToDisplay } from '../../redux/selectors'

const S = {
    HolidaysContainer: styled.div`
        margin-top: 20px;
        display: grid;
        grid-template: auto auto / repeat(7, 5fr);
        gap: 20px;
        justify-content: center;
        align-items: center;
    `
}

export default function ListOFHolidays() {
    let sCity = useSelector(getCityToDisplay)
    let aHolidaysToDisplay = useSelector(getHolidaysToDisplay);
    const fnDispatch = useDispatch();
    React.useEffect(() => {
        fnDispatch(getHolidaysFromAPI(sCity));
    }, [sCity, fnDispatch]);

    const styles = {
        gridTemplate: aHolidaysToDisplay.length > 6 ? "auto auto / repeat(7, 5fr)" :
            `auto auto / repeat(${aHolidaysToDisplay.length}, 5fr)`
    }
    return (
        <S.HolidaysContainer style={styles}>
            {aHolidaysToDisplay.map((holiday) => {
                let iNumberDate = holiday.date.split('-')[2] !== undefined ? holiday.date.split('-')[2] : ''
                return (
                    <Holiday 
                        name={holiday.name}
                        date={iNumberDate}
                        key={holiday.id}
                        isFavorite={holiday.isFavorite}
                        id={holiday.id} />
                )
            })}
        </S.HolidaysContainer>
    )

}