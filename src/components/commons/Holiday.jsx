import React from "react";
import { chageFavorite } from "../../redux/actions/holidays";
import { useDispatch } from "react-redux";
import { StarBorder, Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import styled from "styled-components";

const S = {
    HolidayCard: styled.div`
        width: 125px;
        height: 180px;
        /* background-color: #FFE9CA; */
        color: white;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        justify-content: center; 
        background-color: #92DCCD  ; 
    `,
    HolidayName: styled.h3`
        text-align: center;
        font-weight: 400;
        margin: 0px auto 0px;
    `,
    HolidayDate: styled.h4`
        margin: 0px auto 0px;
        color: black;
        margin-top: auto;
        margin-bottom: 5px;
        font-size: 20px;
        width: 50%;
        border-radius: 15px;
        background-color: white;
        text-align: center;
        font-weight: 400;
    `,
    HolidayMonth: styled.h4`
        margin: 0px auto 0px;
        color: black;
        margin-top: auto;
        font-size: 20px;
        width: auto;
        border-radius: 15px;
        background-color: #ffe9ca;
        text-align: center;
        font-weight: 400;
`,
}
export default function Holiday(props) {
    const [bIsFavorite, setFavorite] = React.useState(props.isFavorite)
    const fnDispatch = useDispatch()
    const fnHandleFavorite = () => {
        setFavorite((prev) => !prev)
        fnDispatch(chageFavorite(props.id))
    }
    return (
        <S.HolidayCard className="holiday-card" >
            {!bIsFavorite ?
                (<StarBorder onClick={fnHandleFavorite} sx={{ color: yellow[200] }}></StarBorder>)
                :
                (<Star onClick={fnHandleFavorite} sx={{ color: yellow[200] }}></Star>)
            }
            <S.HolidayName>{props.name}</S.HolidayName>
            {props.month.length > 0 && <S.HolidayMonth>{props.month}</S.HolidayMonth>}
            <S.HolidayDate>{props.date}</S.HolidayDate>

        </S.HolidayCard>
    )
}