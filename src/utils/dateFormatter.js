export function getMonthYear(date){
    const dt = new Date(date)
    const month = dt.toLocaleString('default', { month: 'long' });
    return `${month.slice(0,3)} ${dt.getFullYear()}`
}