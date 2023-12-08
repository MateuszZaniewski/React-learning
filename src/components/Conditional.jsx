export default function Conditional() {
  let message;
  const condition = false;

  if (condition) {
    message = <h1>This is true condition</h1>;
  } else {
    message = <h1>This is false condition</h1>;
  }
  return (
    <div>
      <span>{message}</span>
    </div>
  );
}
