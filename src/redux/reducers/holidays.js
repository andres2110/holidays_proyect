import {
    START_HOLIDAYS_REQUEST_FROM_API, END_HOLIDAYS_REQUEST_FROM_API, CHANGE_CITY_OF_HOLIDAYS,
    CHANGE_FAVORITE_HOLIDAY
} from "../actionTypes";

const initialState = {
    holidaysAll: [],
    cityCode: "PT",
    favorites: 0,
    favoritesInfo: [],
};


export default function holidays(state = initialState, action) {
    switch (action.type) {
        case START_HOLIDAYS_REQUEST_FROM_API:
            return {
                ...state
            }
        case END_HOLIDAYS_REQUEST_FROM_API:
            let holidays = action.holidays

            return {
                ...state,
                holidaysAll: holidays
            }
        case CHANGE_CITY_OF_HOLIDAYS:
            let city = action.city;
            return {
                ...state,
                cityCode: city,
                favorites: 0,
            }
        case CHANGE_FAVORITE_HOLIDAY:
            const data = getFavorites(state, action.idHoliday)
            return {
                ...state,
                holidaysAll: data.holidaysNew,
                favorites: data.numberFavorites,
                favoritesInfo: data.newFavorites
            }
    }
}

function getFavorites(state, id) {
    let newFavorites = state.favoritesInfo
    let numberFavorites = 0
    let holidaysNew = state && state.holidaysAll && state.holidaysAll.length
        ? state.holidaysAll.map((holiday) => {
            let newHoliday = holiday.id === id ? { ...holiday, isFavorite: !holiday.isFavorite } : { ...holiday }
            let isFavorite = newFavorites.filter((holidayFav)=>holidayFav.id === newHoliday.id ).length
            console.log(isFavorite)
            if (newHoliday.isFavorite) {
                numberFavorites = numberFavorites + 1
                if (isFavorite === 0) {
                    newFavorites.push(newHoliday)
                }
            }
            else if (isFavorite > 0) { // Remove from favorites
                newFavorites = newFavorites.filter((holidayFav)=>holidayFav.id !== newHoliday.id )
            }
            return newHoliday
        })
        : []
    // update favorites
    return {
        holidaysNew: holidaysNew,
        numberFavorites: numberFavorites,
        newFavorites: newFavorites,
    }
}