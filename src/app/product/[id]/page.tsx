import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const DetailProduct = () => {
  return (
    <>
      <section className="h-screen flex flex-col md:flex-row gap-5 p-4 lg:px-20 xl:px-40 items-center mb-8 md:mb-5">
        {singleProduct.img && (
          <div className="relative w-full h-fit">
            <Image src={singleProduct.img} alt="pizza" width={500} height={500} className="object-contain" />
          </div>
        )}
        <div className="h-fit flex flex-col gap-4 text-rose-600">
          <h1 className="text-3xl xl:text-5xl font-bold uppercase">{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
          <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options} />
        </div>
      </section>
    </>
  );
};

export default DetailProduct;
