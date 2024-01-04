export default function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  return month;
}
