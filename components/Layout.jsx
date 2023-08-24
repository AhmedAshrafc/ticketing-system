import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollTopButton from "./ScrollTopButton";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9] dark:bg-slate-800 duration-300 scrollbar">
      <Sidebar />
      <ScrollTopButton />
      <div className="flex flex-col w-full">
        <Header />
        <main className="bg-[#f1f5f9] dark:bg-gray-700 duration-300 p-4 shadow-md h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
