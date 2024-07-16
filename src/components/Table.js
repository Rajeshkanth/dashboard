import React from "react";

const data = [
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Apple MacBook Air",
    color: "Gray",
    category: "Laptop",
    price: "$999",
  },
  {
    name: "Dell XPS 13",
    color: "Black",
    category: "Laptop",
    price: "$1299",
  },
  {
    name: "iPad Pro",
    color: "Silver",
    category: "Tablet",
    price: "$799",
  },
  {
    name: "Samsung Galaxy S21",
    color: "White",
    category: "Phone",
    price: "$999",
  },
  {
    name: "Apple Watch Series 6",
    color: "Red",
    category: "Accessories",
    price: "$399",
  },
  {
    name: "Google Pixel 5",
    color: "Green",
    category: "Phone",
    price: "$699",
  },
];

function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md h-full">
      <div className="overflow-y-auto h-5/6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-slate-50">
            <tr className="text-base">
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4">
                Color
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.color}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 hover:cursor-pointer hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
