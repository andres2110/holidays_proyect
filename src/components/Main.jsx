
import React from "react"
import Select from "./Select";
import ListOfHolidays from "./ListOFHolidays";
import { useSelector } from "react-redux";
import { getNumberOfFavorites } from '../redux/selectors'
import { getMonth } from "../resources/helpers";
export default function Main() {
    let numFavorites = useSelector(getNumberOfFavorites)
    return (
        <div className='container'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ marginRight: 'auto' }}>{getMonth()}</h2>
                <Select />
            </div>
            <ListOfHolidays />
            <div> {`Favorite Holidays: ${numFavorites}`} </div>
        </div>
    )
}