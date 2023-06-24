import React, { useContext } from 'react'
import CartContext from '../src/store/cart-context';
const ProductList = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCart = (e)=>{
     e.preventDefault();
    let obj={
     id:`I${cartCtx.items.length+1}`,
     title: `${props.title}`,
     price: props.price,
     imageUrl: `${props.url}`,
     }
    console.log(obj)
    cartCtx.addItem(obj);
    cartCtx.cart(obj);
    }
  return (
    <div className="group relative ">
    <img
      className="rounded-lg w-full h-full object-cover group-hover:scale-110 duration-500"
      src={props.url}
      alt="product image"
    />
    <div className=" w-full border-[1px] px-2 ">
      <div className=" flex justify-between items-center">
        <div>
          <h2 className="  text-base font-bold">{props.title}</h2>
        </div>
        <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
          <p className=" font-semibold">${props.price}</p>
        </div>
      </div>
      <button
        onClick={addToCart}
        className="cursor-pointer bg-sky-600 text-white  w-[110px] rounded mb-3 text-lg"
      >
        Add to cart
      </button>
    </div>
  </div>
  )
}

export default ProductList