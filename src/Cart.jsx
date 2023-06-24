import React, { useContext, useEffect, useState } from "react";
import CartContext from '../src/store/cart-context';
const Cart = ({ name, ...props }) => {
  const cartCtx = useContext(CartContext)
 
  const [show, setShow] = useState(false);
 
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
   <div>
    <h1  className="flex mr-7  p-3 cursor-pointer text-lg font-bold justify-end" show={show} onClick={handleClose}>Close</h1>
     <div className="mt-4 flex items-center flex-col" onClick={handleShow}>
      
      {cartCtx.items.map((item,cartIndex)=>{
          return (
            <div className="flex p-3">
              
             <div className="flex  flex-col items-center justify-between">
             <div className=" flex">
                <img className="mb-4 h-20 w-20" src={item.imageUrl} alt="" />
                <h1 className="ml-6 mr-2 text-amber-950 font-bold text-lg">{item.title}</h1>
                <p className="ml-2 text-lg font-bold">Rs.{item.price}</p>
              </div>
             
             <div className="flex items-center justify-between">
             <button  className="ml-4 font-bold text-2xl border-0"> - </button>
              <span className="ml-2 font-semibold">QTY. {item.quantity}</span>
              <button  className="ml-4 font-bold text-2xl">+</button>
             </div>
             </div>
              
            </div>
          )
      })}
    </div>
    <div className="flex items-center justify-end mr-10 mb-5 text-2xl font-bold">
      <h1 className="mr-3 ">Total Price <span>$200</span></h1>
    
    </div>
    
   </div>
  );
};

export default Cart;
