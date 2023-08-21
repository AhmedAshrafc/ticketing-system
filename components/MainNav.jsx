import Link from "next/link";

import { Tooltip } from "react-tooltip";

import { CiLogout, CiDark } from "react-icons/ci";
import {
  LuLayoutDashboard,
  LuWallpaper,
  LuUser,
  LuSettings,
  LuInbox,
} from "react-icons/lu";

export default function MainNav({ isOpen }) {
  return (
    <>
      <span className="hidden md:inline-block text-xs mb-4 uppercase text-gray-500">
        Overview
      </span>
      <ul className="flex flex-col gap-4 items-center md:items-stretch">
        <li data-tooltip-id="dashboard-tooltip" data-tooltip-place="right">
          {!isOpen && (
            <Tooltip
              id="dashboard-tooltip"
              content="Dashboard"
              style={{ zIndex: "9999" }}
            />
          )}
          <Link
            href="/dashboard"
            className="flex items-center text-md text-black rounded-md p-2 transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <LuLayoutDashboard className="md:ml-2" />
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
          {!isOpen && (
            <Tooltip
              id="projects-tooltip"
              content="Projects"
              style={{ zIndex: "9999" }}
            />
          )}
          <Link
            href="/projects"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <LuWallpaper className="md:ml-2" />
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
          {!isOpen && (
            <Tooltip
              id="profile-tooltip"
              content="Profile"
              style={{ zIndex: "9999" }}
            />
          )}
          <Link
            href="/profile"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <LuUser className="md:ml-2" />
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
          {!isOpen && (
            <Tooltip
              id="settings-tooltip"
              content="Settings"
              style={{ zIndex: "9999" }}
            />
          )}
          <Link
            href="/settings"
            className="flex items-center text-md text-black rounded-md p-2  transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
          >
            <div className="flex items-center gap-3">
              <LuSettings className="md:ml-2" />
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
          <span className="hidden md:inline-block text-xs mb-4 uppercase text-gray-500">
            Account
          </span>

          <li
            className="group"
            data-tooltip-id="inbox-tooltip"
            data-tooltip-place="right"
          >
            {!isOpen && (
              <Tooltip
                id="inbox-tooltip"
                content="Inbox"
                style={{ zIndex: "9999" }}
              />
            )}
            <Link
              href="/inbox"
              className="flex items-center text-md text-black rounded-md p-2 transition-all group-hover:bg-[#081225] group-hover:text-white group-active:bg-[#081225]"
            >
              <div className="flex items-center gap-3">
                <LuInbox className=" min-w-[20px] text-black group-hover:text-white transition-all ml-1" />
                <div className="md:flex md:gap-24 md:items-center">
                  <span
                    className={`hidden md:inline-block duration-300 font-semibold ${
                      !isOpen && "scale-0"
                    }`}
                  >
                    Inbox
                  </span>

                  <span
                    className={`hidden md:inline-block font-semibold bg-red-500 text-white transition-all text-xs rounded-full py-0 px-2 ${
                      !isOpen && "scale-0"
                    }`}
                  >
                    2
                  </span>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="group"
            data-tooltip-id="darkmode-tooltip"
            data-tooltip-place="right"
          >
            {!isOpen && (
              <Tooltip
                id="darkmode-tooltip"
                content="Dark Mode"
                style={{ zIndex: "9999" }}
              />
            )}
            <Link
              href="/darkmode"
              className="flex items-center text-md text-black rounded-md p-2 transition-all group-hover:bg-[#081225] group-hover:text-white group-active:bg-[#081225]"
            >
              <div className="flex items-center gap-3">
                <CiDark className=" min-w-[20px] text-black group-hover:text-white transition-all ml-1" />
                <span
                  className={`hidden md:inline-block duration-300 font-semibold ${
                    !isOpen && "scale-0"
                  }`}
                >
                  Dark Mode
                </span>
              </div>
            </Link>
          </li>

          <li data-tooltip-id="logout-tooltip" data-tooltip-place="right">
            {!isOpen && (
              <Tooltip
                id="logout-tooltip"
                content="Logout"
                style={{ zIndex: "9999" }}
              />
            )}
            <Link
              href="/logout"
              className="flex items-center text-md text-black rounded-md p-2 transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
            >
              <div className="flex items-center gap-3">
                <CiLogout className=" text-red-600 ml-1" />
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
        </div>
      </ul>
    </>
  );
}
