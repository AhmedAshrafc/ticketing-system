import Link from "next/link";
import Script from "next/script";

import {
  IoHome,
  IoLogoAppleAr,
  IoPersonCircleOutline,
  IoSettingsSharp,
} from "react-icons/io5";

export default function MainNav() {
  return (
    <>
      <Script
        src="https://cdn.lordicon.com/bhenfmcm.js"
        strategy="lazyOnload"
      />

      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center text-md text-black rounded-md p-2 transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <lord-icon
                src="https://cdn.lordicon.com/etqbfrgp.json"
                trigger="hover"
                colors="outline:#131432,primary:#92140c,secondary:#f24c00,tertiary:#b26836,quaternary:#ebe6ef"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span className="hidden md:inline-block">Dashboard</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <lord-icon
                src="https://cdn.lordicon.com/cqgtrhpg.json"
                trigger="hover"
                colors="outline:#131432,primary:#606874,secondary:#4bb3fd,tertiary:#ebe6ef"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span className="hidden md:inline-block">Projects</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/profile"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <lord-icon
                src="https://cdn.lordicon.com/dqxvvqzi.json"
                trigger="hover"
                colors="outline:#121331,primary:#ffc738,secondary:#4bb3fd"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span className="hidden md:inline-block">Profile</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/settings"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <lord-icon
                src="https://cdn.lordicon.com/oncyjozz.json"
                trigger="hover"
                colors="outline:#121331,primary:#646e78"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span className="hidden md:inline-block">Settings</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
