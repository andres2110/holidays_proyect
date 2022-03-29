# NextHolidays

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goal 

The goal of the application is to rank your favorite vacations according to the country and month of your choice. 

### `Requirements`

- Functional Components with local state
- Syled Components
- Hooks (useState and useEffect)
- Redux as global state managements mechanism
- API calls with Axios, integrated on Redux middleware (Redux Thunk)

### `Libraries Used`
 - @mui/icons-material
 - @mui/material
 - styled-components
 - redux-thunk
 - redux-logger
 - react-dom | react-redux
 - react-router-dom

### `Steps for use:` 
 1. Register and get a API_KEY in Festivo from [docs.getfestivo.com/docs/before-you-start](docs.getfestivo.com/docs/before-you-start)     
 2. Change the API_KEY in src/resources/constants.js for that yours
 2. npm install
 3. npm start
 4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Difficulties

### Countries and Month Holidays State
When using an API that returns an array of holidays that receives as parameters (date, country), I thought it was convenient to make a call to the API as these parameters were changing, but I had many doubts about how to make this call. 

Since we use redux as a global state, I decided to save current country and current month as global variables, and use the onChange and OnClick methods of the React components to change these states, using redux actions and reducers. 

And in order to be able to update the variables, I used the useEffect and set it to watch these two variables to make the API call as the values changed.

### Favorites Information

Since I bring the information from the API as the countries and months change, I chose to save the information in another array of favorites and not use the same array of holidaysAll of the global state of the application, because if I saved all the holidays that I asked to the API this was going to grow a lot, since there are countries like US that has as 24 holidays for each month, also this made it easier for me to manipulate the holiday data. 

The difficulty that I found was to synchronize the data, since in the main page, I had to have the favorite status in the holidaysAll. But well I found a way to do it, and whenever I make a new request to the API, I check that the holiday does not exist in the array of favoritesInfo, and if it exists I change the status of isFavorite so that it is updated. 


### Favorites Display
This part was very difficult to decide, because I did not know the way I wanted to present the data and the best object to do it.
The hard part was that I not only wanted to present the favorites, but I wanted to separate them by their country. 
So I opted to create a new array of objects that would have the necessary information to do this ( {country: 'EC', holidays: [] } ).

I tried to use groupBy but I couldn't make it work, so I sorted it by the default countries.
