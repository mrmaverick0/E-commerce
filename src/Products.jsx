import React from 'react'
import ProductsCard from "./ProductsCard"
const Products = () => {
    const productsArr = [
        {
          title: "Colors",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
    
        {
          title: "Black and white Colors",
    
          price: 50,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
    
        {
          title: "Yellow and Black Colors",
    
          price: 70,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
    
        {
          title: "Blue Color",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];
  return (
    
        <div className='py-10 '>
          
            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
                {productsArr.map((item,index) => (
                    <ProductsCard key={index} title={item.title} imageUrl={item.imageUrl} price={item.price} />
                ))}
            </div>
        </div>
    )
  
}

export default Products