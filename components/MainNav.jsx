import Link from "next/link";
import Script from "next/script";

import { Tooltip } from "react-tooltip";

import { CiLogout, CiDark } from "react-icons/ci";

export default function MainNav({ isOpen }) {
  return (
    <>
      <Script
        src="https://cdn.lordicon.com/bhenfmcm.js"
        strategy="lazyOnload"
      />

      <ul className="flex flex-col gap-4 items-center md:items-stretch">
        <li data-tooltip-id="dashboard-tooltip" data-tooltip-place="right">
          <Tooltip
            id="dashboard-tooltip"
            content="Dashboard"
            style={{ zIndex: "9999" }}
          />
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
              <span
                className={`hidden md:inline-block duration-300 ${
                  !isOpen && "scale-0"
                }`}
              >
                Dashboard
              </span>
            </div>
          </Link>
        </li>

        <li data-tooltip-id="projects-tooltip" data-tooltip-place="right">
          <Tooltip
            id="projects-tooltip"
            content="Projects"
            style={{ zIndex: "9999" }}
          />
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
              <span
                className={`hidden md:inline-block duration-300 ${
                  !isOpen && "scale-0"
                }`}
              >
                Projects
              </span>
            </div>
          </Link>
        </li>

        <li data-tooltip-id="profile-tooltip" data-tooltip-place="right">
          <Tooltip
            id="profile-tooltip"
            content="Profile"
            style={{ zIndex: "9999" }}
          />
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
              <span
                className={`hidden md:inline-block duration-300 ${
                  !isOpen && "scale-0"
                }`}
              >
                Profile
              </span>
            </div>
          </Link>
        </li>

        <li data-tooltip-id="settings-tooltip" data-tooltip-place="right">
          <Tooltip
            id="settings-tooltip"
            content="Settings"
            style={{ zIndex: "9999" }}
          />
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
              <span
                className={`hidden md:inline-block duration-300 ${
                  !isOpen && "scale-0"
                }`}
              >
                Settings
              </span>
            </div>
          </Link>
        </li>

        <div className="mt-24">
          <li>
            <Link
              href="/logout"
              className="flex items-center text-md text-black rounded-md p-2 transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
            >
              <div className="flex items-center gap-3">
                <CiLogout className="text-xl text-red-600" />
                <span
                  className={`hidden md:inline-block duration-300 font-semibold ${
                    !isOpen && "scale-0"
                  }`}
                >
                  Logout
                </span>
              </div>
            </Link>
          </li>

          <li className="group">
            <Link
              href="/darkmode"
              className="flex items-center text-md text-black rounded-md p-2 transition-all group-hover:bg-[#081225] group-hover:text-white group-active:bg-[#081225]"
            >
              <div className="flex items-center gap-3">
                <CiDark className="text-xl text-black group-hover:text-white transition-all" />
                <span
                  className={`hidden md:inline-block duration-300 font-semibold ${
                    !isOpen && "scale-0"
                  }`}
                >
                  DarkMode
                </span>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}
