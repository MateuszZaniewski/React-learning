import Button from "./Button";

import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import CategoryForm from "./CategoryForm";

export default function Categories({
  list,
  onButton,
  categories,
  setCategories,
}) {
  const [showModal, setShowModal] = useState(true);
  const handleButton = (e) => {
    onButton(e.target.textContent);
  };

  const getData = (data) => {
    setCategories([
      ...categories,
      {
        name: data.name,
        count: data.count,
        color: data.color,
      },
    ]);
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
      className={`flex items-center justify-start overflow-auto  w-[90%] mx-auto no-scrollbar lg:flex-col lg:w-full lg:items-stretch lg:max-w-sm md:max-w-lg lg:gap-2 lg:pt-2`}
    >
      <div
        className={`${showModal ? "flex" : "hidden"} lg:flex-col pr-4 lg:pr-0`}
      >
        {categories.map((categ) => {
          return (
            <Button
              key={categ.name}
              name={categ.name}
              color={categ.color}
              task={handleButton}
              number={categ.count}
              categories={categories}
            />
          );
        })}
      </div>
      <div className={`${showModal ? "hidden" : "block"}`}>
        <CategoryForm
          onSubmit={getData}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </div>
      <AddCategory
        showModal={showModal}
        setShowModal={setShowModal}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
}
