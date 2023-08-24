import React from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import favicon from "../public/favicon.png";

const Header = () => {
  const router = useRouter();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/projects": "Projects",
    "/settings": "Settings",
    "/profile": "Profile",
  };

  const currentPage = Object.keys(pageTitles).find((route) =>
    router.pathname.startsWith(route)
  );
  const pageTitle = currentPage ? pageTitles[currentPage] : "";

  return (
    <header className="flex flex-col md:flex-row gap-2 items-center justify-between py-4 px-8 duration-300 bg-gray-200 dark:bg-gray-600 dark:text-white">
      <h1 className="text-2xl font-semibold uppercase">{pageTitle}</h1>
      <Link href="/dashboard">
        <div className="flex items-center space-x-2">
          <Image
            src={favicon}
            alt="Logo"
            quality={100}
            width={200}
            height={200}
            priority
            placeholder="blur"
            className="w-5 h-5"
          />
          <span className="font-semibold text-xs">
            Alexandria Urology Hospital
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
