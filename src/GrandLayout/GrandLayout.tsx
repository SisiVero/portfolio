import { ChildrenType } from "../types";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { FC, useState } from "react";

const GrandLayout: FC<ChildrenType> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };


  return (
   <div>
      <div className="">
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
      </div>
      <main>
        {children}
      </main>

      <div className=""> <Footer /></div>
    </div>
  );
};

export default GrandLayout;
