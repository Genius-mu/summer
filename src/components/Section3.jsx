import { Star } from "lucide-react";
import React from "react";

const Section3 = () => {
  return (
    <>
      <section className="w-full py-[5%] flex justify-center items-center h-fit">
        <div className="w-[90%] flex flex-col gap-4 justify-center items-center gap-y-10">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <h2 className="text-xl font-bold text-center">
              Our Tourist Destination
            </h2>
            <p className="text-[15px] text-black text-center">
              Tempore Commodi debitis reiciendis molestias labore voluptas quia
              quo sit.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 md:sm:grid-rows-1 justify-center items-center gap-3">
            <div className="w-full h-[27em] rounded-2xl shadow-2xl bg-[url(/images/img15.webp)] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-4 bg-blend-darken bg-[rgba(0,0,0,.4)]">
              <div className="flex w-full justify-between items-center">
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] py-1 text-[15px] px-2 rounded-4xl text-white">
                  7 days
                </span>
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] flex justify-center items-center gap-2 text-[15px] px-2 py-1 rounded-4xl text-white">
                  <Star className="w-4 h-4 text-yellow-300" fill="yellow" /> 4.9
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] text-[15px] rounded-2xl p-3">
                <p className="text-white [text-shadow:1px_1px_1px_#111]">
                  Eius quae adipisci labore facilis pariatur quis sed alias
                  molestias nemo explicabo numquam, dicta ullam quos nam,
                  repellat reprehenderit?
                </p>
              </div>
            </div>
            <div className="w-full h-[27em] rounded-2xl shadow-2xl bg-[url(/images/img13.webp)] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-4 bg-blend-darken bg-[rgba(0,0,0,.4)]">
              <div className="flex w-full justify-between items-center">
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] py-1 text-[15px] px-2 rounded-4xl text-white">
                  5 days
                </span>
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] flex justify-center items-center gap-2 text-[15px] px-2 py-1 rounded-4xl text-white">
                  <Star className="w-4 h-4 text-yellow-300" fill="yellow" /> 4.9
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] text-[15px] rounded-2xl p-3">
                <p className="text-white [text-shadow:1px_1px_1px_#111]">
                  Eius quae adipisci labore facilis pariatur quis sed alias
                  molestias nemo explicabo numquam, dicta ullam quos nam,
                  repellat reprehenderit?
                </p>
              </div>
            </div>
            <div className="w-full h-[27em] rounded-2xl sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-3 shadow-2xl bg-[url(/images/img14.webp)] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-4 bg-blend-darken bg-[rgba(0,0,0,.4)]">
              <div className="flex w-full justify-between items-center">
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] py-1 text-[15px] px-2 rounded-4xl text-white">
                  3 days
                </span>
                <span className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] flex justify-center items-center gap-2 text-[15px] px-2 py-1 rounded-4xl text-white">
                  <Star className="w-4 h-4 text-yellow-300" fill="yellow" /> 4.9
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[1px_1px_1px_#f1f1f1_inset] text-[15px] rounded-2xl p-3">
                <p className="text-white [text-shadow:1px_1px_1px_#111]">
                  Eius quae adipisci labore facilis pariatur quis sed alias
                  molestias nemo explicabo numquam, dicta ullam quos nam,
                  repellat reprehenderit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
