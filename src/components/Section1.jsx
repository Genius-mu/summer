import React, { useState } from "react";

const Section1 = () => {
  const [Cards, setCards] = useState([
    {
      h2Val: "10m+",
      pVal: "Total Customers",
    },
    {
      h2Val: "09+",
      pVal: "Years Of Experience",
    },
    {
      h2Val: "12k",
      pVal: "Total Destinations",
    },
    {
      h2Val: "5.0",
      pVal: "Average Rating",
    },
  ]);
  return (
    <>
      <section className="w-full mt-[-3em] pb-[5%] flex justify-center items-center h-fit">
        <div className="w-[90%] flex justify-center items-center flex-col gap-y-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
            {Cards.map((Card, index) => (
              <>
                <span
                  key={index}
                  className="flex hover:-translate-y-2 transition ease-in-out duration-300 flex-col bg-white h-[8em] shadow-2xl rounded-2xl gap-y-3 items-center justify-center w-full"
                >
                  <h2 className="uppercase text-2xl md:text-3xl text-black/93 font-semibold">
                    {Card.h2Val}
                  </h2>
                  <p className="text-[14px] md:text-[16px] text-black/60">{Card.pVal}</p>
                </span>
              </>
            ))}
          </div>
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-5 grid-rows-2 gap-4 justify-center items-center">
            <div className="h-[17em] w-full col-start-1 col-end-1 md:col-start-1 md:col-end-4 bg-center bg-cover rounded-2xl bg-blend-darken bg-[rgba(0,0,0,.3)] bg-[url(/images/img13.webp)] p-6 flex flex-col gap-1 justify-end items-start">
              <h3 className="text-[15px] md:text-xl text-white font-thin">Bromo, East JAVA</h3>
              <h3 className="text-[15px] md:text-xl text-white">Bromo Tengger Tour</h3>
            </div>
            <div className="h-[17em] w-full col-start-1 col-end-1 md:col-start-4 md:col-end-6 bg-center bg-cover rounded-2xl bg-blend-darken bg-[rgba(0,0,0,.3)] bg-[url(/images/img14.webp)] p-6 flex flex-col gap-1 justify-end items-start">
              <h3 className="text-[15px] md:text-xl text-white font-thin">Bromo, East JAVA</h3>
              <h3 className="text-[15px] md:text-xl text-white">Bromo Tengger Tour</h3>
            </div>
            <div className="h-[17em] w-full col-start-1 col-end-1 md:col-start-1 md:col-end-3 bg-center bg-cover rounded-2xl bg-blend-darken bg-[rgba(0,0,0,.3)] bg-[url(/images/img15.webp)] p-6 flex flex-col gap-1 justify-end items-start">
              <h3 className="text-[15px] md:text-xl text-white font-thin">Bromo, East JAVA</h3>
              <h3 className="text-[15px] md:text-xl text-white">Bromo Tengger Tour</h3>
            </div>
            <div className="h-[17em] w-full col-start-1 col-end-1 md:col-start-3 md:col-end-6 bg-center bg-cover rounded-2xl bg-blend-darken bg-[rgba(0,0,0,.3)] bg-[url(/images/img11.webp)] p-6 flex flex-col gap-1 justify-end items-start">
              <h3 className="text-[15px] md:text-xl text-white font-thin">Bromo, East JAVA</h3>
              <h3 className="text-[15px] md:text-xl text-white">Bromo Tengger Tour</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
