import Categories from "./Categories";
import Form from "./Form";
const getData = (data) => {
  console.log("Data recived", data);
};

export default function Dashboard({ list, completed }) {
  console.log(list, completed);
  return (
    <div className="flex flex-col items-center">
      <h2 className="pt-5 text-orange-300 font-bold text-lg">Dashboard</h2>
      <Form onSubmit={getData} />
      <div className=" bg-gray-300 rounded-xl w-[90%] mx-auto my-5 pb-4">
        <h3 className=" uppercase text-sm px-2 py-2 font-bold">Categories</h3>
        <Categories />
      </div>
    </div>
  );
}
