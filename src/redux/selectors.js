/**********HOLIDAYS INFO **********************************/
export const getHolidaysToDisplay = (store) =>
     store && store.holidaysAll ? store.holidaysAll : [];

export const getCityToDisplay = (store) => 
     store && store.cityCode ? store.cityCode: "PT"

export const getNumberOfFavorites = (store) =>
     store && store.favorites  ? store.favorites: 0