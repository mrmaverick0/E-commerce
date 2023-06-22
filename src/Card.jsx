import React from "react";

const Card = ({ title, price, image }) => {
  return (
    <div className="mt-7 flex items-center justify-center flex-col">
        <h2 className="text-xl font-bold mt-3 mb-3">{title}</h2>
      <img
        className="hover:scale-125 transition-all duration-700 transform ease-in-out"
        src={image}
        alt=""
      />
      <div className=" flex items-center justify-between gap-12 mt-4 mb-3">
        
        <p>Rs. {price}</p>
        <button className="bg-sky-400 rounded-full text-white w-24">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
