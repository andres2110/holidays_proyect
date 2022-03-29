import React from "react"
import Holiday from './Holiday';
import styled from "styled-components";
import { getMonthText } from "../../resources/helpers";

const S = {
    HolidaysContainer: styled.div`
        margin-top: 20px;
        display: grid;
        gap: 20px;
        justify-content: center;
        align-items: center;
    `,
    NotResult: styled.div`
        width: 100%;
        height:100%;
        background-color: #92DCCD  ; 
        color: white;

    `,
}

export default function ListOFHolidays(props) {
    let iNumberOfHolidays = props.holidays.length;
    const oStyles = {
        gridTemplate: iNumberOfHolidays >= props.gridSize ? `auto auto / repeat(${props.gridSize}, 5fr)` :
            `auto auto / repeat(${iNumberOfHolidays}, 5fr)`
    }
    return (
        <S.HolidaysContainer style={oStyles}>
            {props.holidays.length > 0
                ?
                props.holidays.map((holiday) => {
                    // let iNumberDate = holiday.date.split('-')[2] !== undefined ? holiday.date.split('-')[2] : ''
                    let oDate = new Date(holiday.date)
                    let sMonth = props.printMonth ? getMonthText(oDate.getMonth()):''
                    return (
                        <Holiday
                            name={holiday.name}
                            date={oDate.getDate()}
                            key={holiday.id}
                            isFavorite={holiday.isFavorite}
                            id={holiday.id} 
                            month = {sMonth}
                            />
                    )
                })
                : 
                <S.NotResult>Not Result Found</S.NotResult>
            }
        </S.HolidaysContainer>
    )

}