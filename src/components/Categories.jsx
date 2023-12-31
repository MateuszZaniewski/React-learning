import Button from "./Button";
import plus from "../assets/plus.png";

export default function Categories({ list, onButton }) {
  let home = 0;
  let health = 0;
  let finance = 0;
  let personal = 0;
  let work = 0;
  let shopping = 0;

  const handleButton = (e) => {
    onButton(e.target.textContent);
  };

  const calculateNumberOfTaksPerCategory = () => {
    list.map((el) => {
      el[1].includes("home")
        ? home++
        : el[1].includes("health")
        ? health++
        : el[1].includes("finance")
        ? finance++
        : el[1].includes("personal")
        ? personal++
        : el[1].includes("work")
        ? work++
        : shopping++;
    });
  };

  calculateNumberOfTaksPerCategory();

  return (
    <div className="pt-2 flex justify-start overflow-auto max-w-sm md:max-w-lg gap-2 w-[90%] mx-auto no-scrollbar lg:flex-col lg:w-full">
      <Button name={"All"} color={"bg-white"} task={handleButton} number={1} />
      <Button
        name={"Home"}
        color={"bg-[#845EC2]"}
        task={handleButton}
        number={home}
      />
      <Button
        name={"Health"}
        color={"bg-[#D65DB1]"}
        task={handleButton}
        number={health}
      />
      <Button
        name={"Finance"}
        color={"bg-[#FF6F91]"}
        task={handleButton}
        number={finance}
      />
      <Button
        name={"Personal"}
        color={"bg-[#FF9671]"}
        task={handleButton}
        number={personal}
      />
      <Button
        name={"Work"}
        color={"bg-[#FFC75F]"}
        task={handleButton}
        number={work}
      />
      <Button
        name={"Shopping"}
        color={"bg-[#F9F871]"}
        task={handleButton}
        number={shopping}
      />
      <div className="flex py-2 gap-2 justify-center">
        <img src={plus} className="h-6 w-6" />
        <button>Add new category</button>
      </div>
    </div>
  );
}
