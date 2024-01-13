export default function setColorDropplet(category) {
  if (category === "home") {
    return "bg-[#845EC2]";
  } else if (category === "health") {
    return "bg-[#D65DB1]";
  } else if (category === "finance") {
    return "bg-[#FF6F91]";
  } else if (category === "personal") {
    return "bg-[#FF9671]";
  } else if (category === "work") {
    return "bg-[#FFC75F]";
  } else if (category === "shopping") {
    return "bg-[#F9F871]";
  }
}
