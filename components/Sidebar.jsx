import Logo from "./Logo";
import MainNav from "./MainNav";

import { IoLogOutOutline, IoInvertMode } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="bg-gradient-to-r from-orange-400 to-yellow-300 p-2 md:p-8 relative w-[62px] md:w-[250px] shadow-xl md:rounded-md">
      <Logo />
      <MainNav />
    </aside>
  );
}
