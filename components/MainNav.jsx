import Link from "next/link";

import {
  IoHome,
  IoLogoAppleAr,
  IoPersonCircleOutline,
  IoSettingsSharp,
} from "react-icons/io5";

export default function MainNav() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Link
          href="/"
          className="flex items-center text-md text-black rounded-md p-2 transition-all hover:bg-[#081225] hover:text-white active:bg-[#081225]"
        >
          <div className="flex items-center gap-3">
            <IoHome />
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
            <IoLogoAppleAr />
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
            <IoPersonCircleOutline />
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
            <IoSettingsSharp />
            <span className="hidden md:inline-block">Settings</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
