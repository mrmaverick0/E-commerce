import React from "react";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    // <div>
    //   <h1 onClick={props.onClose}>close</h1>
    //   <img
    //     className="w-full h-60 object-cover"
    //     src="https://as1.ftcdn.net/v2/jpg/03/14/28/96/1000_F_314289672_yEQMeEM4k2Z80wAeJmr0BQM01ajOPhVD.jpg"
    //     alt=""
    //   />
    //   <div className="max-w-screen-xl mx-auto py-20 xl:flex">
    //     <div className="bg-[#fafafa] md:w-1/3 md:bg-[#fafafa] md:py-6 md:px-4">
    //       <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
    //         <h2 className=" text-2xl font-medium">Cart Totals</h2>
    //         <p className=" flex items-center gap-4 text-base">
    //           Subtotal
    //           <span className=" font-titleFont font-bold text-lg">$ 200</span>
    //         </p>
    //         <p className=" flex items-center gap-4 text-base">
    //           Shipping
    //           <span>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
    //             laudantium debitis placeat.
    //           </span>
    //         </p>
    //       </div>
    //       <p className=" font-titleFont font-semibold flex justify-between mt-6">
    //         Total
    //         <span className=" text-xl font-bold">$ 200</span>
    //       </p>
    //       <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
    //         Proceed to Checkout
    //       </button>
    //     </div>
    //   </div>
    // </div>
   <div>
    <h1 onClick={props.onClose} className="flex mr-7 p-3 cursor-pointer text-lg font-bold justify-end">Close</h1>
     <div className="mt-4 flex items-center flex-col">
      
      {cartElements.map((item)=>{
          return (
            <div className="flex  p-3">
              
             <div className="flex flex-col items-center justify-between">
             <div className=" flex">
                <img className="mb-3 h-20 w-20" src={item.imageUrl} alt="" />
                <h1 className="ml-6 mr-2 text-amber-950 font-bold text-lg">{item.title}</h1>
                <p className="ml-2 text-lg font-bold">Rs.{item.price}</p>
              </div>
             
             <div className="flex items-center justify-between">
             <button className="ml-4 font-bold text-2xl border-0"> - </button>
              <span className="ml-2 font-semibold">QTY. {item.quantity}</span>
              <button className="ml-4 font-bold text-2xl">+</button>
             </div>
             </div>
              
            </div>
          )
      })}
    </div>
   </div>
  );
};

export default Cart;
