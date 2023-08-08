import Image from "next/image";
import Link from "next/link";

import {
  IoLogOutOutline,
  IoInvertMode,
  IoSearchOutline,
} from "react-icons/io5";

import logo from "../public/avatar.png";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#eeaeca]  to-[#94bbe9] p-4 text-sm flex flex-col gap-4 md:m-4 md:rounded-xl">
      <h1 className="font-semibold uppercase md:text-md lg:text-lg">
        Alexandria Urology Hospital
      </h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="inline-block capitalize">welcome, fake user</span>
            <Link href="/profile">
              <Image
                src={logo}
                alt="User Profile Picture"
                quality={100}
                placeholder="blur"
                priority
                className="rounded-full shadow-sm cursor-pointer w-[32px]"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 pr-4">
            <IoLogOutOutline className="cursor-pointer md:text-lg" />
            <IoInvertMode className="cursor-pointer md:text-lg" />
          </div>
        </div>

        <div className="md:flex md:justify-center">
          <div className="relative w-full md:w-[60%] ">
            <IoSearchOutline className="text-gray-500 top-3 left-4 absolute md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 lg:text-lg" />
            <input
              type="text"
              className="bg-gray-100 block w-11/12 peer focus:w-full border-none caret-yellow-400 outline-none transition-all py-2 px-8 lg:px-10 lg:text-lg rounded-full pl-10 "
              placeholder="Search for anything..."
            />

            <button className="bg-gray-200 block rounded-full w-[120px] lg:w-[100px] h-[40px] mx-auto mt-4 transition-all md:m-0 md:absolute md:left-[80%] md:peer-focus:left-[90%] md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-gray-500 md:bg-transparent md:border-none md:outline-none lg:text-lg hover:bg-gray-200 active:bg-gray-300">
              Search
            </button>

            <div className="md:bg-gray-300 md:transition-all md:absolute md:peer-focus:left-[80%] md:left-[70%] md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-0.5 md:h-4 lg:h-6"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
