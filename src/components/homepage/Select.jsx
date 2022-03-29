import React from "react"
import { useDispatch } from "react-redux"
import { chageCountryOfHolidays } from "../../redux/actions/holidays"
import { countries } from '../../resources/constants'
import styled from "styled-components"
const S = {
    SelectWrapper: styled.select`
    width: 250px;
    height: 52px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    background-color: #92DCCD;
    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    border-color: #92DCCD;
    `
}
export default function Select(props) {
    const [cityCode, setCityCode] = React.useState(props.country)
    const fnDispatch = useDispatch();
    const fnHandleChange = (event) => {
        fnDispatch(chageCountryOfHolidays(event.target.value))
        setCityCode(event.target.value)
    }
    return (
        <S.SelectWrapper onChange={fnHandleChange} value={cityCode}>
            {countries.map((city) => {
                return (<option value={city.value} key={city.value}>{city.text}</option>)
            })}
        </S.SelectWrapper>

    )

}