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
        <div className="content">
          <h5 className=" text-2xl text-left font-bold text-white">
            Name: {namePath}
          </h5>
          <p className="text-left text-white">Price: {pricePath}</p>
          <p className="text-left text-white">Desc: {descPath}</p>
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
    <>
      <div className=" max-w-8xl w-full mx-auto ">
        <div className="flex justify-between">
          <div className="p-6">
            <div href="#" className="card-box h-100 block max-w-sm ">
              <img src="./public/glassesImage/model.jpg" />
              {renderFace()}
            </div>
          </div>
          <div className="p-6">
            <div href="#" className="card-box max-w-sm ">
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
          <ul className="flex">{renderListGlasses()}</ul>
        </div>
      </div>
    </>
  );
}
