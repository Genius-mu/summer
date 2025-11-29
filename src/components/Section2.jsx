import { DogIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [Tabs] = useState([
    {
      imgVal: "/images/img11.webp",
      h2Val: "Hot Dog",
      pVal: "Dolor voluptate a ipsam quis deserunt illo et magnam molestias dicta tenetur qui similique.",
    },
    {
      imgVal: "/images/img12.webp",
      h2Val: "Hot Dog",
      pVal: "Dolor voluptate a ipsam quis deserunt illo et magnam molestias dicta tenetur qui similique.",
    },
    {
      imgVal: "/images/img13.webp",
      h2Val: "Hot Dog",
      pVal: "Dolor voluptate a ipsam quis deserunt illo et magnam molestias dicta tenetur qui similique.",
    },
    {
      imgVal: "/images/img14.webp",
      h2Val: "Hot Dog",
      pVal: "Dolor voluptate a ipsam quis deserunt illo et magnam molestias dicta tenetur qui similique.",
    },
  ]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="w-full py-[5%] flex justify-center items-center h-fit">
        <div className="w-[90%] sm:grid grid-cols-2 flex flex-col sm:flex-row gap-4 justify-center items-center gap-y-10">
          {/* Image Section */}
          <div
            className="w-full h-[26em] bg-cover bg-no-repeat bg-center rounded-2xl shadow-2xl flex flex-col justify-end items-start p-5 gap-y-2"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Tabs[activeTab].imgVal})`,
            }}
          >
            <nav className="flex bg-white/5 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-50 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] py-2 rounded-4xl items-center md:gap-5 gap-1 [box-shadow:.5px_.5px_5px_#999_inset] w-full justify-between px-3">
              <Link
                to=""
                className="w-full py-1 border-r-2 md:text-[15px] text-[12px] text-center border-white text-white"
              >
                Date
              </Link>
              <Link
                to=""
                className="w-full py-1 border-r-2 md:text-[15px] text-[12px] text-center border-white text-white"
              >
                Budget
              </Link>
              <Link
                to=""
                className="w-full py-1 border-r-2 md:text-[15px] text-[12px] text-center border-white text-white"
              >
                Quest
              </Link>
              <Link
                to=""
                className="w-full py-1 px-3 md:px-0 text-center md:text-[15px] text-[12px] text-black rounded-2xl bg-white"
              >
                Search
              </Link>
            </nav>
            <p className="text-white text-[13px] md:text-[15px] [text-shadow:1px_1px_1px_#000]">
              Lorem vero harum velit. Quod magnam mollitia explicabo, obcaecati
              quos nostrum temporibus ex consectetur laudantium laborum
              veritatis, eius in.
            </p>
          </div>

          {/* Tabs Section */}
          <div className="h-full flex flex-col w-full gap-y-4">
            <div className="flex h-fit w-full justify-center flex-col">
              <h3 className="text-black/50 text-[15px]">How We Work</h3>
              <h2 className="text-black/95 text-2xl font-semibold">
                One Click For You
              </h2>
            </div>

            {Tabs.map((Tab, index) => (
              <div
                key={index}
                className={`flex bg-white/90 h-fit w-full items-center px-4 py-2 rounded-xl gap-x-4 cursor-pointer transition-all duration-200 ${
                  activeTab === index ? "shadow-xl" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                <span className="bg-black/15 shadow-xl rounded-xl py-3 px-3">
                  <DogIcon className="w-5 h-5" />
                </span>
                <span className="flex w-fit flex-col">
                  <h2 className="text-black text-[14px] xl:text-[16px] font-bold">
                    {Tab.h2Val}
                  </h2>
                  <p className="text-black/50 text-[12px] xl:text-[15px] leading-5">
                    {Tab.pVal}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
