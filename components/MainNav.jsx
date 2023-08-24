import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";

import { Tooltip } from "react-tooltip";

import { CiLogout } from "react-icons/ci";
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
      <span className="text-xs mb-4 uppercase text-center md:text-left block text-gray-500 ">
        Overview
      </span>
      <ul className="flex flex-col gap-4 items-center md:items-stretch ">
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
            className="flex items-center text-md text-black dark:text-white rounded-md p-2 transition-all hover:bg-secondary-color dark:hover:bg-secondary-color hover:text-white active:bg-secondary-color"
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
            className="flex items-center text-md text-black dark:text-white rounded-md p-2  transition-all hover:bg-secondary-color dark:hover:bg-secondary-color hover:text-white active:bg-secondary-color"
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
            className="flex items-center text-md text-black dark:text-white rounded-md p-2  transition-all hover:bg-secondary-color dark:hover:bg-secondary-color hover:text-white active:bg-secondary-color"
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
            className="flex items-center text-md text-black dark:text-white rounded-md p-2  transition-all hover:bg-secondary-color dark:hover:bg-secondary-color hover:text-white active:bg-secondary-color"
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

        <div className="flex flex-col items-center gap-4 md:items-start mt-10 w-full">
          <span className="text-xs uppercase text-gray-500 text-center md:self-start">
            Account
          </span>

          <li
            className="group w-full"
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
              className={`flex items-center text-md justify-center md:justify-start ${
                !isOpen && "pl-3"
              }  text-black dark:text-white rounded-md p-2 transition-all group-hover:bg-secondary-color group-hover:text-white dark:hover:bg-secondary-color group-active:bg-secondary-color`}
            >
              <div className="md:flex md:items-center md:gap-3">
                <LuInbox className=" min-w-[20px] text-black dark:text-white group-hover:text-white transition-all" />
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

          <DarkModeToggle isOpen={isOpen} />

          <li
            data-tooltip-id="logout-tooltip"
            data-tooltip-place="right"
            className="w-full"
          >
            {!isOpen && (
              <Tooltip
                id="logout-tooltip"
                content="Logout"
                style={{ zIndex: "9999" }}
              />
            )}
            <Link
              href="/logout"
              className={`flex items-center justify-center ${
                !isOpen && "pl-3"
              } md:justify-start text-md text-black dark:text-white rounded-md p-2 transition-all hover:bg-secondary-color dark:hover:bg-secondary-color hover:text-white active:bg-secondary-color`}
            >
              <div className="flex items-center gap-3">
                <CiLogout className=" text-red-600" />
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
