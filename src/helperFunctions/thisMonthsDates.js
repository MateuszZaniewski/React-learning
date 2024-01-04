export default function getAllDatesInCurrentMonth() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Set the date to the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  // Set the date to the last day of the current month
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // Create an array to store all dates in the current month
  const allDatesInMonth = [];

  // Loop from the first day to the last day of the month and add each date to the array
  for (let i = 0; i < lastDayOfMonth.getDate(); i++) {
    const currentDate = new Date(firstDayOfMonth);
    currentDate.setDate(firstDayOfMonth.getDate() + i);
    allDatesInMonth.push(currentDate);
  }

  return allDatesInMonth;
}
