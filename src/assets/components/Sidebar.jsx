import React, { useState } from "react";
import { list } from "../menu";
import CreateFolder from "./CreateFolder";
function Sidebar() {
    const [active, setactive] = useState(0)
  return (
    <>
      <div className="w-[200px] lg:w-[300px] bg-white h-full sticky shadow-md shadow-yellow-500 p-4 flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-extrabold uppercase">Foldery</h1>
        </div>

        <button className="bg-blue-500 flex justify-center items-center gap-3 w-full px-5 py-3 rounded text-white text-lg mt-3 hover:scale-105 transition-all">
          Add new file{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          className="bg-yellow-500 flex justify-center items-center gap-3 w-full px-5 py-3 rounded text-white text-lg mt-3 hover:scale-105 transition-all"
          onClick={() => window.my_modal_3.showModal()}
        >
          Add folder{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <ul className=" w-full flex flex-col items-center mt-3">
          {list.map((item, index) => (
            <li className=" w-full" key={item.id}>
              <button
                className={` gap-3 mb-5 text-lg font-semibold text-gray-500 w-full  flex justify-center items-center pb-2 pt-2 capitalize  hover:bg-orange-500 hover:text-white transition-all ease-out rounded  ${
                  active === index ? "bg-yellow-300 text-gray-50" : "null"
                }`}
                onClick={() => setactive(index)}
              >
                {item.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        {/* You can open the modal using ID.showModal() method */}
        
        <CreateFolder />
      </div>
    </>
  );
}

export default Sidebar;
