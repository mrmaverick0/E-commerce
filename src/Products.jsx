import React, { useContext } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const productsArr = [
  {
      id:1,
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
      id:2,
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
      id:3,
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
      id:4,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
      id:5,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
      id:6,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
      id:7,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
      id:8,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
  ]
const Products = ({ product }) => {
 
  return (
    <div className="py-10 ">
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        
        {productsArr.map((item, index) => (
         <ProductList
         key={item.id}
         id={item.id}
         title={index+1}
         price={item.price}
         url={item.imageUrl}
        />
        ))}
      </div>
    </div>
  );
};

export default Products;
