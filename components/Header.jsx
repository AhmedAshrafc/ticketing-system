import Image from "next/image";
import { IoLogOutOutline, IoInvertMode } from "react-icons/io5";

import logo from "../public/avatar.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-4 text-sm flex flex-col gap-4 md:m-4">
      <h1 className="font-semibold uppercase md:text-md lg:text-lg">
        Alexandria Urology Hospital
      </h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="inline-block capitalize md:text-md lg:text-lg">
              welcome, fake user
            </span>
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
          <input
            type="text"
            className="bg-gray-100 block w-11/12 focus:w-full border-none caret-yellow-400 outline-none md:focus:w-[66%] transition-all py-2 px-6 lg:py-4 lg:px-8 rounded-full md:w-[60%]"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}
