export default function Dropplet({ category, categories }) {
  console.log(category);
  return (
    <div>
      {categories.map((el) => {
        if (category === el.name) {
          return (
            <div
              key={el.color}
              className={`w-12 h-8 rounded-xl ${el.color}`}
            ></div>
          );
        }
      })}
    </div>
  );
}

// ${el.color}
