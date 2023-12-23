export default function Dropplet({ category }) {
  console.log(category);

  const setColorDropplet = () => {
    if (category === "home") {
      return <div className=" w-5 h-12 rounded-xl bg-[#79BCFA]"></div>;
    } else if (category === "health") {
      return <div className=" w-5 h-12 rounded-xl bg-[#F15252] "></div>;
    } else if (category === "finance") {
      return <div className=" w-5 h-12 rounded-xl bg-[#57EF57] "></div>;
    } else if (category === "personal") {
      return <div className=" w-5 h-12 rounded-xl bg-[#F6F650] "></div>;
    } else if (category === "work") {
      return <div className=" w-5 h-12 rounded-xl bg-[#F256F2] "></div>;
    } else if (category === "shopping") {
      return <div className=" w-5 h-12 rounded-xl bg-[#EFB852] "></div>;
    }
  };
  return <div>{setColorDropplet()}</div>;
}
