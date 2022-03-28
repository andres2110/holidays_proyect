
import React from "react"
import Select from "./Select";
import ListOfHolidays from "../commons/ListOFHolidays";
import { useSelector } from "react-redux";
import { getNumberOfFavorites } from '../../redux/selectors'
import { getMonth } from "../../resources/helpers";
import styled from "styled-components";

const S = {
    SubHeaderWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
    SubTitle: styled.h2`
      margin-right: 50px;
  `,
    Container: styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  `,
}
export default function Main() {
    let iNumFavorites = useSelector(getNumberOfFavorites)
    return (
        <S.Container>
            <S.SubHeaderWrapper>
                <S.SubTitle>{getMonth()}</S.SubTitle>
                <Select />
            </S.SubHeaderWrapper>
            <ListOfHolidays />
            <div> {`Favorite Holidays: ${iNumFavorites}`} </div>
        </S.Container>
    )
}