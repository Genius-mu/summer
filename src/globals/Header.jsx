import React, { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // If past 80px → show background
      if (currentY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-[4em] fixed top-0 left-0 z-50 transition-all duration-300 flex justify-center items-center
        ${
          isScrolled
            ? "bg-black/90 shadow-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-[90%] flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-1 text-white">
          <div className="size-6 text-white [text-shadow:1px_1px_1px_#000]">
            <svg fill="none" viewBox="0 0 48 48">
              <path
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3337H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white [text-shadow:1px_1px_1px_#000] tracking-tight">
            Aura
          </h2>
        </div>

        {/* NAV */}
        <nav
          className={`flex p-2 rounded-4xl items-center gap-5 ${
            isScrolled
              ? " bg-transparent"
              : "[box-shadow:.5px_.5px_5px_#999_inset] bg-white/5 backdrop-blur-xl"
          }`}
        >
          <a className="py-1.5 px-5 text-[15px] rounded-4xl font-semibold text-black bg-white/95 hover:text-blue-600 transition">
            Home
          </a>
          <a className="py-1.5 px-5 text-[15px] rounded-4xl font-semibold text-white hover:text-blue-500 transition">
            About Us
          </a>
          <a className="py-1.5 px-5 text-[15px] rounded-4xl font-semibold text-white hover:text-blue-500 transition">
            Services
          </a>
          <a className="py-1.5 px-5 text-[15px] rounded-4xl font-semibold text-white hover:text-blue-500 transition">
            Contact
          </a>
        </nav>

        {/* GITHUB BUTTON */}
        <div
          className={`p-3 rounded-full ${
            isScrolled
              ? " bg-transparent"
              : "[box-shadow:.5px_.5px_5px_#999_inset] bg-white/5 backdrop-blur-xl"
          }`}
        >
          <Link
            to="https://github.com/Genius-mu"
            target="_blank"
            className="text-white"
          >
            <Github className="w-5 h-5" strokeWidth="2" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
