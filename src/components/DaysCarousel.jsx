import getDate from "../helperFunctions/currentDate";
export default function DaysCarousel({ weekDays }) {
  const today = getDate().slice(-2);
  return (
    <div className="flex justify-center gap-[5%]">
      {weekDays.map((day) => {
        return (
          <div key={day} className="">
            <div
              className={`flex flex-col items-center font-bold px-2 py-3 w-14 border rounded-xl bg-gray-200 ${
                today === day[2] ? "bg-gray-400" : ""
              }`}
            >
              <span>{day[0]}</span>
              <span>{day[2]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
