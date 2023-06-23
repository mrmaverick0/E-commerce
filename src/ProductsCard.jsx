import React from "react";

const Card = ({ title,imageUrl,price }) => {
  return (
    <div className="group relative ">
       <img
          className='rounded-lg w-full h-full object-cover group-hover:scale-110 duration-500'
          src={imageUrl}
          alt="product image" />
      <div className=" w-full border-[1px] px-2 py4">
        <div className=" flex justify-between items-center">
          <div>
            <h2 className="  text-base font-bold">
              {title}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:-translate-x-28 transition-transform duration-500">
             
              <p className=" font-semibold">${price}</p>
            </div>
            <p
              className=" absolute z-20 w-[100px] text-red-500 hover:text-gray-900 font-bold flex items-center top-0 
             transform -translate-x-32 group-hover:-translate-x-0 transition-transform cursor-pointer duration-500"
            >
              Add To Cart
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Card;
