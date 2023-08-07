import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen md:p-8 md:gap-6 bg-gradient-to-b from-blue-400 to-blue-500">
      <Sidebar />
      <div className="flex flex-col md:gap-6 w-full">
        <Header />
        <main className="bg-gray-100 shadow-2xl h-full">{children}</main>
      </div>
    </div>
  );
}
