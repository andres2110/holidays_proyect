import {
    START_HOLIDAYS_REQUEST_FROM_API, END_HOLIDAYS_REQUEST_FROM_API, CHANGE_CITY_OF_HOLIDAYS,
    CHANGE_FAVORITE_HOLIDAY
} from "../actionTypes";

const initialState = {
    holidaysAll: [],
    cityCode: "PT",
    favoritesLength: 0,
    favoritesInfo: [],
};


export default function holidays(state = initialState, action) {
    switch (action.type) {
        case START_HOLIDAYS_REQUEST_FROM_API:
            return {
                ...state
            }
        case END_HOLIDAYS_REQUEST_FROM_API:
            let aHolidays = action.holidays
            aHolidays = changeHolidays(aHolidays,state.favoritesInfo)
            return {
                ...state,
                holidaysAll: aHolidays
            }
        case CHANGE_CITY_OF_HOLIDAYS:
            let sCity = action.city;
            return {
                ...state,
                cityCode: sCity,
            }
        case CHANGE_FAVORITE_HOLIDAY:
            const oData = getFavorites(state, action.idHoliday)
            return {
                ...state,
                holidaysAll: oData.newHoliday,
                favoritesLength: oData.newFavorites.length,
                favoritesInfo: oData.newFavorites
            }
        default:
            return state;
    }
}

 const getFavorites = (state, id) => {
    let aNewFavorites= state.favoritesInfo
    let aHolidays = state && state.holidaysAll && state.holidaysAll.length
        ? state.holidaysAll.map((holiday) => {
            let oHoliday = holiday.id === id ? { ...holiday, isFavorite: !holiday.isFavorite } : { ...holiday }
            let iFavoritesLen = aNewFavorites.filter((holidayFav)=>holidayFav.id === oHoliday.id ).length
            if (oHoliday.isFavorite) {
                if (iFavoritesLen===0) {
                    aNewFavorites.push(oHoliday)
                }
            }
            else if (iFavoritesLen > 0) { // Remove from favorites
                aNewFavorites = aNewFavorites.filter((holidayFav)=>holidayFav.id !== oHoliday.id )
            }
            return oHoliday
        })
        : []
    // update favorites
    return {
        newHoliday: aHolidays,
        newFavorites: aNewFavorites,
    }
}

const changeHolidays = (holidays,favoritesInfo) =>{
    
    let newHolidays = holidays.map((holiday)=>{
        let newHolidayArr = favoritesInfo.filter((favHoliday)=>favHoliday.id === holiday.id)
        return newHolidayArr.length===0? {...holiday}: { ...newHolidayArr[0]} 
    })
    return newHolidays
    
}