import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";

export default function Logo() {
  return (
    <Link href="/dashboard">
      <Image
        src={logo}
        alt="Logo"
        className="mt-4 mb-8 md:mb-10"
        quality={100}
        width={200}
        height={200}
        priority
        placeholder="blur"
      />
    </Link>
  );
}
