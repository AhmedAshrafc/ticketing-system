import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        className="mt-4 mb-8 md:mb-10"
        quality={100}
        priority
        placeholder="blur"
      />
    </Link>
  );
}
