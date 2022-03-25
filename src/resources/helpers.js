export const getMonth=  () => {
    let formatter = new Intl.DateTimeFormat('en-us', { month: 'long' })
    let month = formatter.format(new Date())
    return month;
}