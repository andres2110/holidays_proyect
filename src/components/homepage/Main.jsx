
import React from "react"
import Select from "./Select";
import ListOfHolidays from "../commons/ListOFHolidays";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfFavorites, getHolidaysToDisplay, getInfoToDisplay } from '../../redux/selectors'
import { getHolidaysFromAPI } from "../../redux/actions/holidays";
import styled from "styled-components";
import Month from "./Month";

const S = {
  SubHeaderWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Container: styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  `,
  FavoritesCount: styled.div`
    margin-left: 10px;
  `
}
export default function Main() {
  let oInfoRequest = useSelector(getInfoToDisplay)
  let aHolidaysToDisplay = useSelector(getHolidaysToDisplay);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    fnDispatch(getHolidaysFromAPI(oInfoRequest.country, oInfoRequest.month));
  }, [oInfoRequest.country,oInfoRequest.month,fnDispatch]); 

  let iNumFavorites = useSelector(getNumberOfFavorites)
  return (
    <S.Container>
      <S.SubHeaderWrapper>
        <Month month={oInfoRequest.month} />
        <Select country={oInfoRequest.country} />
        <S.FavoritesCount> {`Favorite Holidays: ${iNumFavorites}`} </S.FavoritesCount>
      </S.SubHeaderWrapper>
      <ListOfHolidays holidays={aHolidaysToDisplay} gridSize={7} printMonth ={false}/>
    </S.Container>
  )
}