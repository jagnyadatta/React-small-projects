import React from "react";
import Image1 from "../assets/3.png";
import Image2 from "../assets/4.png";
import Image3 from "../assets/5.png";

const TopList = () => {
  const FoodData = [
    {
      image: Image1,
      rating: "⭐⭐⭐⭐⭐",
      price: 10.99,
      name: "Food Name",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, odio.",
    },
    {
      image: Image2,
      rating: "⭐⭐⭐⭐⭐",
      price: 10.99,
      name: "Food Name",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, odio.",
    },
    {
      image: Image3,
      rating: "⭐⭐⭐⭐⭐",
      price: 10.99,
      name: "Food Name",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, odio.",
    }
  ];
  return (
    <div className="container py-14">
      {/* header sections  */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our Pages</p>
      </div>
      {/* image Section  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          FoodData.map((item, index) => (
            <div key={index} className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300">
              <img src={item.image} alt="" className="w-60 sm:w-40 sm:h-40 mx-auto object-cover rounded-full img-shadow" />
              <div className="space-y-2">
                <p className="text-red-500">{item.rating}</p>
                <p className="text-lg font-semibold">{item.name}</p>
                <p >{item.desc}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))
        }     
      </div>
    </div>
  );
};

export default TopList;
