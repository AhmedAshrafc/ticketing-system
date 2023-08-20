import Logo from "./Logo";
import MainNav from "./MainNav";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <aside className="bg-primary-color p-2 md:p-8 relative w-[62px] md:w-[250px] shadow-2xl">
    //   <Logo />
    //   <MainNav />
    // </aside>

    <aside
      className={`${
        isOpen ? "w-72" : "w-20"
      } duration-300 p-2 md:p-4 bg-primary-color relative shadow-2xl`}
    >
      <img
        src="/control.png"
        className={`hidden md:block absolute cursor-pointer -right-3 top-9 w-7 border-2 border-blue-500 rounded-full ${
          !isOpen && "rotate-180"
        }`}
        onClick={toggleSidebar}
      />
      <Logo />
      <MainNav isOpen={isOpen} />
    </aside>
  );
}
