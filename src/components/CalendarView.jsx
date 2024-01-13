import thisWeekDays from "../helperFunctions/thisWeekDays";
import WeekOverview from "./WeekOverview";
import DaysCarousel from "./DaysCarousel";
import SingleDayCalendar from "./SingleDayCalendar";
import prevImg from "../assets/prev.png";
import nextImg from "../assets/next.png";
import { useEffect, useState } from "react";

export default function CalendarView({ list, completed }) {
  const [weekDays, setWeekDays] = useState([]);
  const [topInfo, setTopInfo] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);

  useEffect(() => {
    console.log("Days loaded successfully");
    const days = thisWeekDays(numberOfDays);
    const startDay = days[0].toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    const endDay = days[6].toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });

    setTopInfo(
      startDay === endDay
        ? `${startDay} ${days[0].getFullYear()}`
        : `${startDay} - ${endDay} ${days[0].getFullYear()}`
    );

    setWeekDays(days.map((day) => day.toString().slice(0, 15).split(" ")));
  }, [numberOfDays]);

  return (
    <div className="my-6 ">
      <div className="flex gap-4 items-center justify-center">
        <img
          onClick={() => setNumberOfDays(numberOfDays - 1)}
          src={prevImg}
          className="h-8 w-8 cursor-pointer"
        />
        <h1 className="text-5xl font-bold text-center py-8 ">{topInfo}</h1>
        <img
          onClick={() => setNumberOfDays(numberOfDays + 1)}
          src={nextImg}
          className="h-8 w-8 cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <DaysCarousel weekDays={weekDays} setWeekDays={setWeekDays} />
        <WeekOverview weekDays={weekDays} list={list} completed={completed} />
        <SingleDayCalendar />
      </div>
    </div>
  );
}
