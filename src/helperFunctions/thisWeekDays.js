export default function getNextWeekDates(number) {
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  const daysUntilNextMonday =
    1 - currentDayOfWeek + (currentDayOfWeek === 0 ? 7 : 0);

  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilNextMonday);

  const nextSunday = new Date(nextMonday);
  nextSunday.setDate(nextMonday.getDate() + 6);

  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(nextMonday);
    currentDate.setDate(nextMonday.getDate() + i + number * 7); // Adjusted for the provided number
    weekDates.push(currentDate);
  }

  return weekDates;
}
