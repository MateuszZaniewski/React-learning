import plus from "../assets/plus.png";
export default function AddCategory({ showModal, setShowModal }) {
  return (
    <div
      onClick={() => setShowModal(!showModal)}
      className="flex py-2 gap-2 justify-center"
    >
      <img src={plus} className={`h-6 w-6 ${showModal ? "block" : "hidden"}`} />
      <button className={`${showModal ? "block" : "hidden"}`}>
        Add new category
      </button>
    </div>
  );
}
