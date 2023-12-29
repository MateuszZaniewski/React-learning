import uppcoming from "../assets/upcomming.png";
import calendar from "../assets/calendar.png";
import today from "../assets/today.png";
import sticky from "../assets/sticky.png";

export default function Lists() {
  const items = [
    {
      name: "Uppcoming",
      image: uppcoming,
    },
    {
      name: "Today",
      image: today,
    },
    {
      name: "Calendar",
      image: calendar,
    },
    {
      name: "Sticky Wall",
      image: sticky,
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <li
          className=" list-none flex items-center gap-2 mb-2 px-2 py-1 cursor-pointer rounded-lg hover:bg-gray-300"
          key={item.name}
        >
          <img src={item.image} className="h-6 w-6" />
          <span>{item.name}</span>
        </li>
      ))}
    </div>
  );
}
