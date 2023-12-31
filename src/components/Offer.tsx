import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <>
      <div className="bg-black h-screen md:h-[80vh] flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')]">
        <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
          <h1 className="text-white text-center text-5xl xl:text-5xl font-bold">Delicious Burger & French Fry</h1>
          <p className="text-white text-center xl:text-xl">Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
          <CountDown />
          <button className="text-rose-600 px-4 py-2 rounded border-rose-600 border-2 hover:text-white hover:bg-rose-600 transition-all duration-500">Order Now</button>
        </div>
        <div className="flex-1 relative w-full md:h-full">
          <Image src="/offerProduct.png" alt="offer" fill className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default Offer;
