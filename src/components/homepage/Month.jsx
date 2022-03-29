import React from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { getMonthText } from "../../resources/helpers";
import styled from "styled-components";
import { useDispatch } from "react-redux"
import { changeMonthOfHolidays } from "../../redux/actions/holidays";
const S = {
  Container: styled.div`
      margin-right: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  SubTitle: styled.h2`   
  `
}
export default function Month(props) {
  const [month, setMonth] = React.useState(getMonthText(props.month))
  const fnDispatch = useDispatch();
  const fnPreviousMonth = () => {
    let iMonth = props.month > 0 ?  props.month - 1 : 11 
    let sMonthText = getMonthText(iMonth)
    fnDispatch(changeMonthOfHolidays(iMonth))
    setMonth(sMonthText)

  }
  const fnNextMonth = () => {
    let iMonth = props.month < 11 ?  props.month + 1 : 0 
    let sMonthText = getMonthText(iMonth)
    fnDispatch(changeMonthOfHolidays(iMonth))
    setMonth(sMonthText)
    
  }
  return (
    <S.Container>
      <ArrowBackIos onClick={fnPreviousMonth}></ArrowBackIos>
      <S.SubTitle>{month}</S.SubTitle>
      <ArrowForwardIos onClick={fnNextMonth}></ArrowForwardIos>
    </S.Container>

  )
}