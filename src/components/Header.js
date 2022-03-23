import React from "react"
import { useDispatch } from "react-redux"
import { chageCityOfHolidays } from "../redux/actions/holidays"
export default function Header() {

    const [cityCode,setCityCode] = React.useState('PT')
    
    const fnDispatch = useDispatch();
    React.useEffect(() => {
        fnDispatch(chageCityOfHolidays(cityCode))
    }, [cityCode,fnDispatch])

    
    function handleChange(event){
        setCityCode(event.target.value)
    }
    return (

        <header className="header">
            <h2 className="header--title">Next Holiday</h2>
            <select id="cities" onChange={handleChange} value={cityCode}>
                <option value="US">United States</option>
                <option value="PT">Portugal</option>
                <option value="ES">Spain</option>
                <option value="PL">Poland</option>
                <option value="EC">Ecuador</option>
            </select>
        </header>
    )
}