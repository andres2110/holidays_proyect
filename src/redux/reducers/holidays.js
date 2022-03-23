import { START_HOLIDAYS_REQUEST_FROM_API, END_HOLIDAYS_REQUEST_FROM_API, CHANGE_CITY_OF_HOLIDAYS,
    CHANGE_FAVORITE_HOLIDAY} from "../actionTypes";

const initialState = {
    holidaysAll: [],
    cityCode: "PT",
    favorites: 0,
    favoritesInfo: [],
};


export default function holidays (state = initialState, action) {
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
                favorites:0,
            }
        case CHANGE_FAVORITE_HOLIDAY:
            let id = action.idHoliday
            let newFavorites = state.favoritesInfo
            let numberFavorites = 0
            let holidaysNew = state && state.holidaysAll && state.holidaysAll.length ? state.holidaysAll.map((holiday)=>{
                let newHoliday = holiday.id === id ? {...holiday,isFavorite:!holiday.isFavorite}
                                                   : {...holiday}
                if(newHoliday.isFavorite) {
                    numberFavorites = numberFavorites + 1
                    newFavorites.push(holiday)
                }
                return newHoliday
            }): []
            return {
                ...state,
                holidaysAll:holidaysNew,
                favorites:numberFavorites,
                favoritesInfo: newFavorites
            }
    }
}