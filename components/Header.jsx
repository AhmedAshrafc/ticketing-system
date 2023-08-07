import Image from "next/image";
import {
  IoLogOutOutline,
  IoInvertMode,
  IoSearchOutline,
} from "react-icons/io5";

import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="bg-white p-4 text-sm flex flex-col gap-4">
      <h1 className="font-semibold uppercase md:text-md lg:text-lg">
        Alexandria Urology Hospital
      </h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="inline-block capitalize md:text-md lg:text-lg">
              welcome, fake user
            </span>
            <Image
              src={logo}
              alt="User Profile Picture"
              quality={100}
              placeholder="blur"
              priority
              className="rounded-full shadow-sm cursor-pointer w-[40px]"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <IoLogOutOutline className="cursor-pointer md:text-lg" />
            <IoInvertMode className="cursor-pointer md:text-lg" />
          </div>
        </div>

        <div className="md:flex md:justify-center">
          <input
            type="text"
            className="bg-gray-100 block w-full border-none focus:outline-none py-2 px-6 lg:py-4 lg:px-8 rounded-full lg:w-2/3"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}
