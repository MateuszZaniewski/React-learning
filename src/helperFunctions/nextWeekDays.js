export default function getNextWeekDates() {
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  // Calculate the difference between the current day and Monday
  const daysUntilNextMonday =
    1 - currentDayOfWeek + (currentDayOfWeek === 0 ? 7 : 0);

  // Set the date to the next Monday
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilNextMonday + 7);

  // Calculate the date for the next Sunday
  const nextSunday = new Date(nextMonday);
  nextSunday.setDate(nextMonday.getDate() + 6);

  // Create an array to store the dates for the entire week
  const weekDates = [];

  // Loop from Monday to Sunday and add each date to the array
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(nextMonday);
    currentDate.setDate(nextMonday.getDate() + i);
    weekDates.push(currentDate);
  }

  return weekDates;
}
