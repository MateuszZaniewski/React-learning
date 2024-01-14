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
  notes,
  setNotes,
  categories,
  setCategories,
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
          categories={categories}
          setCategories={setCategories}
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
          categories={categories}
          setCategories={setCategories}
        />
      );
    } else if (activeTab === "Calendar") {
      return (
        <CalendarView
          list={list}
          completed={completed}
          categories={categories}
          setCategories={setCategories}
        />
      );
    } else {
      return <StickyWallView notes={notes} setNotes={setNotes} />;
    }
  };

  return <div>{resolveCurrentView()}</div>;
}
