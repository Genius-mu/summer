import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import Header from "./globals/Header";

export const MyContext = createContext();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="bg-[#f1f1f1]/50">
        <Routes>
          <Route
            path="/"
            element={
              <MyContext.Provider value={{ dark, setDark }}>
                <Home />
              </MyContext.Provider>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
