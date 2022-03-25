import React from "react"
import Holiday from './Holiday';
import { useDispatch, useSelector } from "react-redux";
import { getHolidaysFromAPI } from '../redux/actions/holidays'
import { getHolidaysToDisplay, getCityToDisplay } from '../redux/selectors'

export default function ListHolidays(props) {
    //Create Holidays JSX
    let cityCode = useSelector(getCityToDisplay)
    let holidaysToDisplay = useSelector(getHolidaysToDisplay);
    const fnDispatch = useDispatch();
    React.useEffect(() => {
        fnDispatch(getHolidaysFromAPI(cityCode));
    }, [cityCode,fnDispatch]);

    //Styles
    const styles = {
        gridTemplate: holidaysToDisplay.length > 6 ? "auto auto / repeat(7, 5fr)" :
            `auto auto / repeat(${holidaysToDisplay.length}, 5fr)`
    }
    return (
        <div className='holidays' style={styles}>
            {holidaysToDisplay.map((holiday) => {
                let numberDate = holiday.date.split('-')[2] !== undefined ? holiday.date.split('-')[2] : ''
                return (
                    <Holiday name={holiday.name}
                        date={numberDate}
                        key={holiday.id}
                        isFavorite={holiday.isFavorite}
                        id={holiday.id} />
                )
            })}
        </div>
    )

}