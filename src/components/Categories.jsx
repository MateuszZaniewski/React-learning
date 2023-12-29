import Button from "./Button";
import plus from "../assets/plus.png";

export default function Categories({ onButton }) {
  const handleButton = (e) => {
    onButton(e.target.textContent);
  };

  return (
    <div className="pt-2 flex justify-start overflow-auto max-w-sm md:max-w-lg gap-2 w-[90%] mx-auto no-scrollbar lg:flex-col lg:w-full">
      <Button name={"All"} color={"bg-white"} task={handleButton} />
      <Button name={"Home"} color={"bg-[#79BCFA]"} task={handleButton} />
      <Button name={"Health"} color={"bg-[#F15252]"} task={handleButton} />
      <Button name={"Finance"} color={"bg-[#57EF57]"} task={handleButton} />
      <Button name={"Personal"} color={"bg-[#F6F650]"} task={handleButton} />
      <Button name={"Work"} color={"bg-[#F256F2]"} task={handleButton} />
      <Button name={"Shopping"} color={"bg-[#EFB852]"} task={handleButton} />
      <div className="flex py-2 gap-2 justify-center">
        <img src={plus} className="h-6 w-6" />
        <button>Add new category</button>
      </div>
    </div>
  );
}
