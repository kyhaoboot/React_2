import React, { useState } from "react";
import DataJson from "./data.json";
export default function index() {
  const [listGlasses] = useState(DataJson);
  const [imgPath, setImgPath] = useState(listGlasses[0].url);
  const [namePath, setnamePath] = useState(listGlasses[0].name);
  const [pricePath, setPricePath] = useState(listGlasses[0].price);
  const [descPath, setDescPath] = useState(listGlasses[0].desc);
  const hanlechangeColor = (img, name, price, desc) => {
    // console.log(img, name, price, desc);
    setImgPath(img);
    setnamePath(name);
    setPricePath(price);
    setDescPath(desc);
  };
  const renderFace = () => {
    return (
      <div>
        <div className="glass">
          <img src={imgPath} width="200px" />
        </div>
        <div className="content w-full">
          <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {namePath}
          </h5>
          <p className="font-normal text-left text-gray-900 tracking-tight dark:text-white">
            Price: {pricePath}
          </p>
          <p className="font-normal text-left text-gray-900 tracking-tight dark:text-white">
            Desc: {descPath}
          </p>
        </div>
      </div>
    );
  };
  const renderListGlasses = () => {
    const newListGlasses = listGlasses.map((glass) => {
      // console.log(glass);
      return (
        <li style={{ margin: "10px" }} key={glass.id}>
          <button
            onClick={() =>
              hanlechangeColor(glass.url, glass.name, glass.price, glass.desc)
            }
          >
            <img src={glass.url} width={"300px"}></img>
          </button>
        </li>
      );
    });
    return newListGlasses;
  };
  return (
    <div className=" max-w-8xl w-full mx-auto ">
      <div className="">
        <div className="flex justify-between">
          <div className="p-6">
            <div
              href="#"
              className="card-box block max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <img src="public/glassesImage/model.jpg" />
              {renderFace()}
            </div>
          </div>
          <div className="p-6">
            <div
              href="#"
              className="card-box block max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <img src="public/glassesImage/model.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke", padding: "50px" }}>
        <h1
          style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}
        >
          Chọn Kính
        </h1>

        <div href="#" className="">
          <ul className="max-w-8xl w-full mx-auto flex">
            {renderListGlasses()}
          </ul>
        </div>
      </div>
    </div>
  );
}
