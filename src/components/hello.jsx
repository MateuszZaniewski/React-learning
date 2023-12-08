import Fruit from "./Fruit";

export function Hello({ fruits }) {
  const selectedFruits = [];

  function selectFruit(fruit) {
    if (!selectedFruits.includes(fruit)) {
      selectedFruits.push(fruit);
      console.log(selectedFruits);
    }
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <Fruit
            key={index}
            name={fruit.name}
            price={fruit.price}
            onClick={() => selectFruit(fruit)}
          ></Fruit>
        ))}
      </ul>
    </>
  );
}
