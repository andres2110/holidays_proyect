# NextHolidays

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goal 

The goal of the application is to rank your favorite vacations according to the country of your choice. 

### `Technologies`

- Functional Components with local state
- Syled Components
- Hooks (useState and useEffect)
- Redux as global state managements mechanism
- API calls with Axios, integrated on Redux middleware (Redux Thunk)

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Difficulties

### Countries Holidays and Month Holidays
When using an API that returns an array of holidays that receives as parameters (date, country, language), I thought it was convenient to make a call to the API as these parameters were changing, but I had many doubts about how to make this call. 

Since we use redux as a global state, I decided to save current country and current month as global variables, and use the onChange and OnClick methods of the React components to change these states, using redux actions and reducers. 

And in order to be able to update the variables, I used the useEffect and set it to watch these two variables to make the API call as the values changed.

### Favorites Information

When using an API that returns an array of holidays that receives as parameters (date, city, language), I thought it was convenient to make a call to the API as these parameters were changing, but I had many doubts about how to make this call. 

Since we use redux as a global state, I decided to save current city and current month as global variables, and use the onChange and OnClick methods of the React components to change these states, using redux actions and reducers. 

And in order to be able to update the variables, I used the useEffect and set it to watch these two variables to make the API call as the values changed.


This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
