import Button from "./Button";

export default function Categories({ onButton }) {
  const handleButton = (e) => {
    onButton(e.target.textContent);
  };

  return (
    <div className="pt-2 flex justify-start overflow-auto max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto no-scrollbar">
      <Button name={"all"} color={""} task={handleButton} />
      <Button name={"home"} color={"bg-[#79BCFA]"} task={handleButton} />
      <Button name={"health"} color={"bg-[#F15252]"} task={handleButton} />
      <Button name={"finance"} color={"bg-[#57EF57]"} task={handleButton} />
      <Button name={"personal"} color={"bg-[#F6F650]"} task={handleButton} />
      <Button name={"work"} color={"bg-[#F256F2]"} task={handleButton} />
      <Button name={"shopping"} color={"bg-[#EFB852]"} task={handleButton} />
    </div>
  );
}
