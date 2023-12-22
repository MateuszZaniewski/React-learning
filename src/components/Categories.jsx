import Button from "./Button";

export default function Categories() {
  return (
    <div className="flex justify-start overflow-auto max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto no-scrollbar">
      <Button name={"Home"} color={"[#79BCFA]"} />
      <Button name={"Health"} color={"[#57EF57]"} />
      <Button name={"Finance"} color={"[#F15252]"} />
      <Button name={"Personal"} color={"[#F6F650]"} />
      <Button name={"Work"} color={"[#F256F2]"} />
      <Button name={"Shopping"} color={["#EFB852"]} />
    </div>
  );
}
