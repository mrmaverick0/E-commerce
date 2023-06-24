import "./App.css";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
function App() {
  const [product, setProduct] = useState([
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
  ]);
 

  const  router = createBrowserRouter([
    {path:'/about', element: <About/>},
    {path:'/home', element: <Home/>},
    {path:'/', element: <div><Cart placement='end' name='Cart'/>
    <Products/></div> }
  ])

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
