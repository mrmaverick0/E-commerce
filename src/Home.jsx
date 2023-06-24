import React from "react";

const Home = () => {
  return (
    <div className="mt-[0%]">
      <section className="text-center bg-gray-500 h-[40vh] m-[6%] pt-[5%]">
        <h3 className="w-[20%] h-[20%] ml-[40%] border">
          Get our latest Album
        </h3>
        <img src="" className="w-[80px]" alt=""></img>
      </section>
      <ul className="list-none bg-white m-[10%] pl-[12%] block">
        <h3 className="mb-3 text-xl font-bold">Tours</h3>
        <li>
          JUL 16 &nbsp;&nbsp; DETROID MI &nbsp;&nbsp;&nbsp; DIE ENERY MUSIC
          THEATRE &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="bg-sky-400 text-white rounded w-[100px]">
            {" "}
            BUY TICKETS
          </button>
        </li>
        <hr className=""></hr>
        <li>
          JUL 19 &nbsp;&nbsp; TORONTO,ON &nbsp;&nbsp;&nbsp; BUDWEISER STAGE
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='bg-sky-400 text-white rounded w-[100px]'> BUY TICKETS</button>
        </li>
        <hr></hr>
        <li>
          JUL 22 &nbsp;&nbsp; BRISTOW, VA &nbsp;&nbsp;&nbsp; JIGGY LUBE
          LIVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='bg-sky-400 text-white rounded w-[100px]'> BUY TICKETS</button>
        </li>
        <hr></hr>
        <li>
          JUL 29 &nbsp;&nbsp; PHEONIX, AZ &nbsp;&nbsp;&nbsp; AK-CHIN
          PAVILION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='bg-sky-400 text-white rounded w-[100px]'> BUY TICKETS</button>
        </li>
        <hr></hr>
        <li>
          AUG 2 &nbsp;&nbsp; LAS VEGAS NV &nbsp;&nbsp;&nbsp; T-MOBILE
          ARENA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='bg-sky-400 text-white rounded w-[100px]'> BUY TICKETS</button>
        </li>
        <hr></hr>
        <li>
          AUG 7 &nbsp;&nbsp; CONCORD, CA &nbsp;&nbsp;&nbsp; CONCORD
          PAVILION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;<button className='bg-sky-400 text-white rounded w-[100px]'> BUY TICKETS</button>
        </li>
      </ul>
      <footer className="footer">
        <h1> The Generics</h1>
      </footer>
    </div>
  );
};

export default Home;
