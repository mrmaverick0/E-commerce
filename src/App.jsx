import "./App.css";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react";


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
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
 
  return (
    <div >
      <Header onShowCart={showCartHandler} onClose={hideCartHandler}/>
      {cartIsShown ? <Cart onClose={hideCartHandler}/> :  <Products/> }
     
      
      
      <Footer/>
    </div>
  );
}

export default App;
