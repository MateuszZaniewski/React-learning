export default function Fruit({ name, price }) {
  return (
    <>
      {price >= 9 ? (
        <li>
          {name} {price}
        </li>
      ) : null}
    </>
  );
}
