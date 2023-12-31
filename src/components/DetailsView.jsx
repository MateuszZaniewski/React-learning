import CalendarView from "./CalendarView";
import StickyWallView from "./StickyWallView";
import TodayView from "./TodayView";
import UpcomingView from "./UpcomingView";

export default function DetailsView({
  activeTab,
  list,
  completed,
  completeTask,
  deleteItem,
  selectedCategory,
}) {
  const resolveCurrentView = () => {
    if (activeTab === "Upcoming") {
      return <UpcomingView />;
    } else if (activeTab === "Today") {
      return (
        <TodayView
          list={list}
          completed={completed}
          completeTask={completeTask}
          deleteItem={deleteItem}
          activeCategory={selectedCategory}
        />
      );
    } else if (activeTab === "Calendar") {
      return <CalendarView />;
    } else {
      return <StickyWallView />;
    }
  };

  return <div>{resolveCurrentView()}</div>;
}
