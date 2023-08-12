import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <aside className="bg-primary-color p-2 md:p-8 relative w-[62px] md:w-[250px] shadow-2xl">
      <Logo />
      <MainNav />
    </aside>
  );
}
