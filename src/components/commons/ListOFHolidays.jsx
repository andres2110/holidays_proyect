import React from "react"
import Holiday from './Holiday';
import styled from "styled-components";

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
                    let iNumberDate = holiday.date.split('-')[2] !== undefined ? holiday.date.split('-')[2] : ''
                    return (
                        <Holiday
                            name={holiday.name}
                            date={iNumberDate}
                            key={holiday.id}
                            isFavorite={holiday.isFavorite}
                            id={holiday.id} />
                    )
                })
                : 
                <S.NotResult>Not Result Found</S.NotResult>
            }
        </S.HolidaysContainer>
    )

}