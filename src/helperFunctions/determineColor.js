export default function setColorDropplet(category, categories) {
  for (const el of categories) {
    if (category === el.name) {
      return `bg-${el.color}`;
    }
  }
}
