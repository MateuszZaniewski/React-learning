export default function ColorPicker({ background, color, setColor }) {
  return (
    <div
      className={`h-6 w-8 rounded-lg border cursor-pointer hover:border-white ${background} ${
        color === background ? "border-black" : "border-gray-300"
      } `}
      onClick={() => setColor(background)}
    ></div>
  );
}
