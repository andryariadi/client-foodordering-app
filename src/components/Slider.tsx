"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide33.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] bg-fuchsia-50">
        <div className="flex flex-1 flex-col gap-8 justify-center items-center text-rose-600 font-bold ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center p-4 md:10 uppercase">{data[currentSlide].title}</h1>
          <button className="text-rose-600 px-4 py-2 rounded border-rose-600 border-2 hover:text-white hover:bg-rose-600 transition-all duration-500">Order Now</button>
        </div>
        <div className="flex-1 relative w-full">
          <Image src={data[currentSlide].image} alt="hero" fill className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Slider;
