import React from "react";
import { chageFavorite } from "../../redux/actions/holidays";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const S = {
    HolidayCard: styled.div`
        width: 125px;
        height: 125px;
        background-color: #FFE9CA;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        justify-content: center; 
        margin-bottom: 15px;
    `,
    HolidayName: styled.h3`
        text-align: center;
        font-weight: 400;
        margin: 0px auto 0px;
    `,
    HolidayDate: styled.h4`
        margin: 0px auto 0px;
        color: white;
        margin-top: auto;
        margin-bottom: 5px;
        font-size: 20px;
        width: 40px;
        border-radius: 200%;
        background-color: #92DCCD;
        text-align: center;
        font-weight: 400;
    `,
}
export default function Holiday(props) {
    const [bIsFavorite, setFavorite] = React.useState(props.isFavorite)
    const fnDispatch = useDispatch()
    const styles = {
        backgroundColor: "#92DCCD",
        color: "white"
    }
    //FUNCTIONS
    const handle = () => {
        setFavorite((prev) => !prev)
        fnDispatch(chageFavorite(props.id))
    }
    return (
        <S.HolidayCard className="holiday-card"
            style={!bIsFavorite ? styles : {}}
            onClick={handle}>
            <S.HolidayName>{props.name}</S.HolidayName>
            <S.HolidayDate>{props.date}</S.HolidayDate>
        </S.HolidayCard>
    )
}