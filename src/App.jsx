import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
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
    <div >
      <Header />
      {productsArr.map((item) => {
        return (
          <div>
            <Card title={item.title} price={item.price} image={item.imageUrl} />
            
          </div>
        );
      })}
      <button className="bg-sky-700 text-white rounded-lg w-24 text-center text-lg mt-3 mb-3 ml-[700px]">See all cart</button>
    </div>
  );
}

export default App;
