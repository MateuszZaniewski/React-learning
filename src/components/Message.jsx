export default function Message() {
  const displayMessage = () => {
    console.log("Message displayed");
  };
  return (
    <div>
      <button onClick={displayMessage}>Click me to recive a message</button>
    </div>
  );
}
