import React from "react"
import { useDispatch } from "react-redux"
import { chageCityOfHolidays } from "../redux/actions/holidays"
export default function Select() {
    const data = [
        { value: 'US', text: 'United States' },
        { value: 'PT', text: 'Portugal' },
        { value: 'ES', text: 'Spain' },
        { value: 'PL', text: 'Poland' },
        { value: 'EC', text: 'Ecuador' },
    ]
    const cities = data.map((city) => {
        return (<option value={city.value} key={city.value}>{city.text}</option>)
    })
    const [cityCode, setCityCode] = React.useState('PT')
    const fnDispatch = useDispatch();
    function handleChange(event) {
        setCityCode(event.target.value)
        fnDispatch(chageCityOfHolidays(event.target.value))
    }
    return (
        <select id="cities" onChange={handleChange} value={cityCode}>
            {cities}
        </select>

    )

}