import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <>
      <div className="p-4 md:px-20 xl:px-40 h-[calc(100vh-7rem)] flex flex-col md:flex-row items-center mb-44 md:mb-0">
        {menu.map((item) => (
          <Link href={`/menu/${item.slug}`} key={item.id} style={{ backgroundImage: `url(${item.img})` }} className="w-full h-1/2 md:h-5/6 bg-cover bg-center p-8">
            <div className={`text-${item.color} w-1/2 h-full justify-evenly flex flex-col`}>
              <h1 className="text-2xl md:text-3xl font-bold uppercase">{item.title}</h1>
              <p className="text-sm my-3">{item.desc}</p>
              <button className={`hidden 2xl:block py-2 px-4 w-1/2 rounded-md bg-amber-500 text-white`}>Explore</button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuPage;
