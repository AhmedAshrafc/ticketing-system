import Image from "next/image";
import {
  IoLogOutOutline,
  IoInvertMode,
  IoSearchOutline,
} from "react-icons/io5";

import logo from "../public/avatar.png";
import Link from "next/link";

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

        {/* <div className="md:flex md:justify-center bg-green-500">
          <div className="md:grow relative">
            <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="bg-gray-100 block w-11/12 focus:w-full border-none caret-yellow-400 outline-none md:focus:w-[66%] transition-all py-2 px-6 lg:py-4 lg:px-8 rounded-full md:w-[60%] pl-10"
              placeholder="Search..."
            />
          </div>
        </div> */}
        <div className="md:flex md:justify-center">
          <div className="relative w-full md:w-[60%]">
            <IoSearchOutline className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="bg-gray-100 block w-11/12 focus:w-full border-none caret-yellow-400 outline-none transition-all py-2 px-8 lg:py-4 lg:px-10  rounded-full pl-10"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
