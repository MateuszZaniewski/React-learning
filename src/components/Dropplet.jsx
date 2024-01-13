import determineColor from "../helperFunctions/determineColor";
export default function Dropplet({ category }) {
  return (
    <div className={`w-12 h-8 rounded-xl ${determineColor(category)}`}></div>
  );
}
