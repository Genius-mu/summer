import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-[url(/images/img11.webp)] bg-[rgba(0,0,0,.7)] bg-blend-darken flex justify-center items-center h-[33em] bg-cover bg-center bg-fixed">
      <div className="w-[90%] flex p-3 items-center rounded-2xl justify-between flex-col gap-y-4">
          <h2 className="text-white text-3xl sm:text-5xl font-bold [text-shadow:1px_1px_1px_#000] text-center">
            Tour Aura, Fammmm!
          </h2>
          <p className="text-white text-[13px] sm:text-[15px] [text-shadow:1px_1px_1px_#000] max-w-[600px] text-center">Cum enim quo odio, eaque nisi saepe consequatur cupiditate neque eveniet, explicabo quod maxime illum. Accusamus facilis, fugit quos delectus quaerat enim!</p>
          <Link to="" className="font text-[13px] sm:text-[15px] text-black w-fit rounded-xl shadow-xl bg-white py-2 px-8 ease-in-out duration-300 hover:bg-black/80 hover:text-white">Tour Now</Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
