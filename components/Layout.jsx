import Header from "./Header";
import ScrollTopButton from "./ScrollTopButton";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55] scrollbar ">
      <Sidebar />
      <ScrollTopButton />
      <div className="flex flex-col w-full">
        <Header />
        {/* create a main content that doesn't make the sidebar and header components move if there is a scroll */}
        {/* <main className="flex-grow p-4 overflow-y-auto scrollbar">{children}</main> */}
        <main className="bg-[#f1f5f9] p-4 shadow-2xl h-full">{children}</main>
      </div>
    </div>
  );
}
