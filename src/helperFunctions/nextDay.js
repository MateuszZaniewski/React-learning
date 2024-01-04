export default function nextDay() {
  const today = new Date();

  // Set the date to tomorrow
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  return nextDay;
}
