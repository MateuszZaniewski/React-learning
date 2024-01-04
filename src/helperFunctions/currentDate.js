export default function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  return `${year}/${month}/${day}`;
}

// returns current day in yyyy/mm/dd format
