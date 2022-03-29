import {
    START_HOLIDAYS_REQUEST_FROM_API,
    END_HOLIDAYS_REQUEST_FROM_API,
    CHANGE_COUNTRY_OF_HOLIDAYS,
    CHANGE_MONTH_OF_HOLIDAY,
    CHANGE_FAVORITE_HOLIDAY
} from "../actionTypes";

import { DEFAULT_MONTH, DEFAULT_COUNTRY } from "../../resources/constants"; 

const initialState = {
    holidaysAll: [],
    country: DEFAULT_COUNTRY,
    favoritesLength: 0,
    favoritesInfo: [],
    currentMonth: DEFAULT_MONTH
};


export default function holidays(state = initialState, action) {
    switch (action.type) {
        case START_HOLIDAYS_REQUEST_FROM_API:
            return {
                ...state
            }
        case END_HOLIDAYS_REQUEST_FROM_API:
            let aHolidays = action.holidays
            aHolidays = changeHolidays(aHolidays, state.favoritesInfo)
            return {
                ...state,
                holidaysAll: aHolidays
            }
        case CHANGE_COUNTRY_OF_HOLIDAYS:
            let sCountry = action.country;
            return {
                ...state,
                country: sCountry,
            }
        case CHANGE_MONTH_OF_HOLIDAY:
            let iMonth = action.month;
            return {
                ...state,
                currentMonth: iMonth,
            }
        case CHANGE_FAVORITE_HOLIDAY:
            const oData = getFavorites(state, action.idHoliday)
            return {
                ...state,
                holidaysAll: oData.newHolidays,
                favoritesLength: oData.newFavorites.length,
                favoritesInfo: oData.newFavorites
            }
        default:
            return state;
    }
}

const getFavorites = (state, id) => {
    let aNewFavorites = state.favoritesInfo
    let aHolidays = state.holidaysAll
    let iIndexFavorite = aNewFavorites.findIndex((favorite) => favorite.id === id)
    let iIndexHoliday = aHolidays.findIndex((holiday) => holiday.id === id)
    if (iIndexFavorite < 0) {
        if (iIndexHoliday > -1) aHolidays[iIndexHoliday].isFavorite = !aHolidays[iIndexHoliday].isFavorite
        aNewFavorites.push(aHolidays[iIndexHoliday])
    } else {
        aNewFavorites = aNewFavorites.filter((favorite) => favorite.id !== id)
        if (iIndexHoliday > -1) aHolidays[iIndexHoliday].isFavorite = !aHolidays[iIndexHoliday].isFavorite
    }
    return {
        newHolidays: aHolidays,
        newFavorites: aNewFavorites,
    }
}

const changeHolidays = (holidays, favoritesInfo) => {

    let newHolidays = holidays.map((holiday) => {
        let newHolidayArr = favoritesInfo.filter((favHoliday) => favHoliday.id === holiday.id)
        return newHolidayArr.length === 0 ? { ...holiday } : { ...newHolidayArr[0] }
    })
    return newHolidays

}