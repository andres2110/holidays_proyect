export const getMonthText=  (monthNumber) => {
    if (monthNumber === 1) return 'February' //TODO resolve bug about the February Month
    let formatter = new Intl.DateTimeFormat('en-us', { month: 'long' })
    let today = new Date()
    today.setMonth(monthNumber)
    let month = formatter.format(today)
    return month;
}