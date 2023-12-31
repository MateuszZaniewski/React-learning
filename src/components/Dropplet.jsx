export default function Dropplet({ category }) {
  console.log(category);

  const setColorDropplet = () => {
    if (category === "home") {
      return <div className="w-8 h-5 rounded-xl bg-[#845EC2]"></div>;
    } else if (category === "health") {
      return <div className="w-8 h-5 rounded-xl bg-[#D65DB1] "></div>;
    } else if (category === "finance") {
      return <div className="w-8 h-5 rounded-xl bg-[#FF6F91] "></div>;
    } else if (category === "personal") {
      return <div className="w-8 h-5 rounded-xl bg-[#FF9671] "></div>;
    } else if (category === "work") {
      return <div className="w-8 h-5 rounded-xl bg-[#FFC75F] "></div>;
    } else if (category === "shopping") {
      return <div className="w-8 h-5 rounded-xl bg-[#F9F871] "></div>;
    }
  };
  return <div>{setColorDropplet()}</div>;
}
