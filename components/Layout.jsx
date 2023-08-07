import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-400 to-blue-500 scrollbar">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="bg-[#f1f5f9] p-4 shadow-2xl h-full">{children}</main>
      </div>
    </div>
  );
}
