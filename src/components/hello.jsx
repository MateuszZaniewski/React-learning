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
          <li onClick={() => selectFruit(fruit)} key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}
