import { START_HOLIDAYS_REQUEST_FROM_API, END_HOLIDAYS_REQUEST_FROM_API,CHANGE_CITY_OF_HOLIDAYS
,CHANGE_FAVORITE_HOLIDAY} from "../actionTypes";
import axios from "axios";

const startHolidaysRequest = () => ({
    type: START_HOLIDAYS_REQUEST_FROM_API
});

const endHolidaysRequest = recivedResponse => ({
    type: END_HOLIDAYS_REQUEST_FROM_API,
    holidays: recivedResponse && recivedResponse.length > 0 ? recivedResponse : [],
});

const transformData = data => {
    return data.holidays.map((holiday)=>{
        return ({id:holiday.id,name:holiday.name,date:holiday.date,isFavorite: false})
    })
};

export function getHolidaysFromAPI(city="PT"){
    const url = "https://api.getfestivo.com/v2/holidays"
    let today = new Date();
    return dispatch => {
        dispatch(startHolidaysRequest());
        return axios.get(url, {
            params: {
                api_key: "ee12eeea09fc3b3ce72f39ab8f67961f",
                country: city,
                year: today.getFullYear(),
                month: today.getMonth() + 1,
                // // day: today.getDate(),
                 after: 1
            }
        })
            .then((response) => {
                //console.log(response.data)
                dispatch(endHolidaysRequest(transformData(response.data)))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const chageCityOfHolidays = cityCode =>({
    type: CHANGE_CITY_OF_HOLIDAYS,
    city: cityCode ? cityCode: "PT",
})

export const chageFavorite= id =>({
    type: CHANGE_FAVORITE_HOLIDAY,
    idHoliday: id? id: '',
})