import Button from "./Button";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";

export default function Categories({
  list,
  onButton,
  categories,
  setCategories,
}) {
  const [showModal, setShowModal] = useState(true);

  const handleButton = (e) => {
    setShowModal;
    onButton(e.target.textContent);
  };

  useEffect(() => {
    const updatedCategories = categories.map((category) => {
      const categoryCount = list.filter(
        (task) => task[1] === category.name
      ).length;
      return {
        ...category,
        count: categoryCount,
      };
    });
    setCategories(updatedCategories);
  }, [list]);

  return (
    <div
      className={`lg:pt-2 flex lg:items-stretch items-center justify-start overflow-auto lg:max-w-sm md:max-w-lg lg:gap-2 w-[90%] mx-auto no-scrollbar lg:flex-col lg:w-full ${
        showModal ? "block" : "hidden"
      }`}
    >
      {categories.map((categ) => {
        return (
          <Button
            key={categ.name}
            name={categ.name}
            color={`bg-[${categ.color}]`}
            task={handleButton}
            number={categ.count}
          />
        );
      })}
      <div
        onClick={() => setShowModal(!showModal)}
        className={showModal ? "block" : "hidden"}
      >
        <AddCategory categories={categories} setCategories={setCategories} />
      </div>
    </div>
  );
}
