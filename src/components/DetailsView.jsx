import CalendarView from "./CalendarView";
import StickyWallView from "./StickyWallView";
import TodayView from "./TodayView";
import UpcomingView from "./UpcomingView";

export default function DetailsView({
  activeTab,
  list,
  completed,
  completeTask,
  unCompleteItem,
  selectedCategory,
  deleteTask,
}) {
  const resolveCurrentView = () => {
    if (activeTab === "Upcoming") {
      return (
        <UpcomingView
          list={list}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          activeCategory={selectedCategory}
          deleteTask={deleteTask}
        />
      );
    } else if (activeTab === "Today") {
      return (
        <TodayView
          list={list}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          activeCategory={selectedCategory}
          deleteTask={deleteTask}
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
