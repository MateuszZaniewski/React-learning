import plus from "../assets/plus.png";
export default function AddCategory({ categories, setCategories }) {
  return (
    <div className="flex py-2 gap-2 justify-center">
      <img src={plus} className="h-6 w-6" />
      <button>Add new category</button>
    </div>
  );
}
