import {
    START_HOLIDAYS_REQUEST_FROM_API,
    END_HOLIDAYS_REQUEST_FROM_API,
    CHANGE_COUNTRY_OF_HOLIDAYS,
    CHANGE_FAVORITE_HOLIDAY,
    CHANGE_MONTH_OF_HOLIDAY
} from "../actionTypes";
import { API_KEY, API_URL } from "../../resources/constants";
import axios from "axios";

const startHolidaysRequest = () => ({
    type: START_HOLIDAYS_REQUEST_FROM_API
});

const endHolidaysRequest = recivedResponse => ({
    type: END_HOLIDAYS_REQUEST_FROM_API,
    holidays: recivedResponse && recivedResponse.length > 0 ? recivedResponse : [],
});

const transformData = data => {
    return data.holidays.map((holiday) => {
        return ({
            id: holiday.id,
            name: holiday.name,
            date: holiday.date,
            isFavorite: false,
            country: holiday.country
        })
    })
};

export function getHolidaysFromAPI(country = "PT", month = new Date().getMonth()) {
    let today = new Date();
    return dispatch => {
        dispatch(startHolidaysRequest());
        return axios.get(API_URL, {
            params: {
                api_key: API_KEY,
                country: country,
                year: today.getFullYear(),
                month: month + 1,
                after: 1
            }
        })
            .then((response) => {
                dispatch(endHolidaysRequest(transformData(response.data)))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const chageCountryOfHolidays = country => ({
    type: CHANGE_COUNTRY_OF_HOLIDAYS,
    country: country ? country : 'PT',
})

export const chageFavorite = id => ({
    type: CHANGE_FAVORITE_HOLIDAY,
    idHoliday: id ? id : '',
})

export const changeMonthOfHolidays = month => ({
    type: CHANGE_MONTH_OF_HOLIDAY,
    month: month ? month : 0
})