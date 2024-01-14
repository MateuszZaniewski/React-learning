import plus from "../assets/plus.png";
export default function AddCategory({ showModal, setShowModal }) {
  console.log(showModal);
  return (
    <div
      onClick={() => setShowModal(!showModal)}
      className="flex py-2 gap-2 justify-center"
    >
      <img src={plus} className="h-6 w-6" />
      <button>Add new category</button>
    </div>
  );
}
