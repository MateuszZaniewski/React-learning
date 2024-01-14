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
  console.log(categories);
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

  console.log(categories);

  return (
    <div
      className={`lg:pt-2 flex lg:items-stretch items-center justify-start overflow-auto lg:max-w-sm md:max-w-lg lg:gap-2 w-[90%] mx-auto no-scrollbar lg:flex-col lg:w-full`}
    >
      <div className={`${showModal ? "block" : "hidden"}`}>
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
        <CategoryForm onSubmit={getData} />
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
