import uppcoming from "../assets/upcomming.png";
import calendar from "../assets/calendar.png";
import today from "../assets/today.png";
import sticky from "../assets/sticky.png";

export default function Lists({ activeListsTab, onChangeActiveList }) {
  const items = [
    {
      name: "Upcoming",
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

  const changeActiveList = (name) => {
    onChangeActiveList(name);
  };

  return (
    <div>
      {items.map((item) => (
        <li
          onClick={() => changeActiveList(item.name)}
          className={`list-none flex items-center gap-2 mb-2 px-2 py-1 cursor-pointer rounded-lg hover:bg-gray-300 ${
            activeListsTab === item.name ? "bg-gray-300" : "bg-none"
          }`}
          key={item.name}
        >
          <img src={item.image} className="h-6 w-6" />
          <span>{item.name}</span>
        </li>
      ))}
    </div>
  );
}
