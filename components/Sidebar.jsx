import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "./Logo";
import MainNav from "./MainNav";
import avatar from "../public/avatar.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } duration-300 dark:bg-[#111827] p-2 md:p-4 bg-primary-color relative shadow-2xl`}
    >
      <img
        src="/control.png"
        className={`hidden md:block absolute cursor-pointer -right-3 top-9 w-7 border-2 border-blue-500 rounded-full ${
          !isOpen && "rotate-180"
        }`}
        onClick={toggleSidebar}
      />
      <div className="flex items-center justify-center">
        <Logo isOpen={isOpen} />
      </div>
      <MainNav isOpen={isOpen} />
      <div className="border-t pt-3 flex items-center justify-center md:items-start md:justify-normal mt-4">
        <Link href="/profile">
          <Image
            src={avatar}
            alt="Profile Picture"
            className="min-w-[40px] min-h-[40px] rounded-full"
            quality={100}
            width={40}
            height={40}
            priority
            placeholder="blur"
          />
        </Link>
        <div
          className={`hidden md:flex md:justify-between md:items-center md:w-52 md:ml-3 ${
            !isOpen && "scale-0"
          }`}
        >
          <div className="leading-4">
            <h4 className="font-semibold text-black dark:text-white duration-300">
              Welcome, John Doe
            </h4>
            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
