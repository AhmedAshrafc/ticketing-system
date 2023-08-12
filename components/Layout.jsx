import Header from "./Header";
import ScrollTopButton from "./ScrollTopButton";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9] scrollbar ">
      <Sidebar />
      <ScrollTopButton />
      <div className="flex flex-col w-full">
        <Header />
        <main className="bg-[#f1f5f9] p-4 shadow-md h-full">{children}</main>
      </div>
    </div>
  );
}
