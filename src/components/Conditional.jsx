export default function Conditional() {
  let message;
  const condition = true;

  return condition ? (
    <h1>This is true condition</h1>
  ) : (
    <h1>This is false condition</h1>
  );
}
