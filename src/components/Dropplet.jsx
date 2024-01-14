export default function Dropplet({ category, categories }) {
  return (
    <div>
      {categories.map((el) => {
        if (category === el.name) {
          return (
            <div
              key={el.color}
              className={`w-12 h-8 rounded-xl bg-[${el.color}]`}
            ></div>
          );
        }
      })}
    </div>
  );
}
