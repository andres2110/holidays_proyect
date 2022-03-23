
import React from "react"
import Holiday from './Holiday';
import { useDispatch, useSelector } from "react-redux";
import { getHolidaysFromAPI } from '../redux/actions/holidays'
import { getHolidaysToDisplay, getCityToDisplay, getNumberOfFavorites } from '../redux/selectors'

export default function Main() {
    //Get Information from Store
    let cityCode = useSelector(getCityToDisplay)
    let numFavorites = useSelector(getNumberOfFavorites)
    let holidaysToDisplay = useSelector(getHolidaysToDisplay);
    const fnDispatch = useDispatch();
    React.useEffect(() => {
        fnDispatch(getHolidaysFromAPI(cityCode));
    }, [cityCode,fnDispatch]);
    //Create Holidays JSX
    const holidays = holidaysToDisplay.map((holiday) => {
        let numberDate = holiday.date.split('-')[2]
        return (
            <Holiday name={holiday.name} 
                     date={numberDate} 
                     key={holiday.id} 
                     isFavorite={holiday.isFavorite} 
                     id={holiday.id}/>
        )
    })
    //Styles
    const styles = {
        gridTemplate: holidays.length > 6 ?"auto auto / repeat(7, 5fr)":
        `auto auto / repeat(${holidays.length}, 5fr)`
    }
    //Functions
    function getMonth() {
        let formatter = new Intl.DateTimeFormat('en-us', { month: 'long' })
        let month = formatter.format(new Date())
        return month;
    }
    
    return (
        <div className='container'>
            <div>
                <h2>{getMonth()}</h2>
            </div>
            <div className='holidays' style={styles}>
                {holidays}
            </div>
            <div> {`Favorite Holidays: ${numFavorites}`} </div>
        </div>
    )
}