import thisWeekDays from "../helperFunctions/thisWeekDays";
import WeekOverview from "./WeekOverview";
import DaysCarousel from "./DaysCarousel";
import SingleDayCalendar from "./SingleDayCalendar";
import prevImg from "../assets/prev.png";
import nextImg from "../assets/next.png";
import { useEffect, useState } from "react";

export default function CalendarView() {
  const [weekDays, setWeekDays] = useState([]);
  const [topInfo, setTopInfo] = useState("");

  useEffect(() => {
    console.log("Days loaded succes");
    const array = [];
    const days = thisWeekDays(0);
    days.forEach((day) => {
      array.push(day.toString().slice(0, 15).split(" "));
    });
    setWeekDays(array);
    if (array[0][1] == array[6][1]) {
      setTopInfo(
        `${array[0][2]} - ${array[6][2]} ${array[0][1]} ${array[0][3]}`
      );
    } else {
      setTopInfo(
        `${array[0][2]} - ${array[6][2]} ${array[0][1]}-${array[6][1]} ${array[0]} ${array[0][3]}`
      );
    }
  }, []);

  return (
    <div className="my-6 ">
      <div className="flex gap-4 items-center justify-center">
        <img src={prevImg} className="h-8 w-8 cursor-pointer" />
        <h1 className="text-5xl font-bold text-center py-8 ">{topInfo}</h1>
        <img src={nextImg} className="h-8 w-8 cursor-pointer" />
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <WeekOverview />
        <DaysCarousel weekDays={weekDays} setWeekDays={setWeekDays} />
        <SingleDayCalendar />
      </div>
    </div>
  );
}
