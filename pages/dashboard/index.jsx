import DynamicTitle from "@/components/DynamicTitle";

import { HiUsers } from "react-icons/hi2";

export default function Dashboard() {
  return (
    <>
      <DynamicTitle />

      <h2 className="font-semibold text-2xl w-fit relative mb-12 mx-auto dark:text-white">
        Fake User's Stats
      </h2>
      <div className="grid grid-cols-fluid gap-5 cursor-pointer">
        {/* BOX 1 */}
        <div className="bg-white text-xl p-6 text-center opacity-80 relative transition-all hover:opacity-100 group">
          <div className="before:content-[''] absolute top-0 right-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <div className="after:content-[''] absolute bottom-0 left-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <HiUsers className="inline-block" />
          <span className="block font-semibold mt-2 mb-2 text-2xl">300</span>
          <span className="text-blue-500 text-semibold italic">Clients</span>
        </div>
        {/* BOX 1 */}
        {/* BOX 1 */}
        <div className="bg-white text-xl p-6 text-center opacity-80 relative transition-all hover:opacity-100 group">
          <div className="before:content-[''] absolute top-0 right-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <div className="after:content-[''] absolute bottom-0 left-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <HiUsers className="inline-block" />
          <span className="block font-semibold mt-2 mb-2 text-2xl">135</span>
          <span className="text-blue-500 text-semibold italic">Projects</span>
        </div>
        {/* BOX 1 */}
        {/* BOX 1 */}
        <div className="bg-white text-xl p-6 text-center opacity-80 relative transition-all hover:opacity-100 group">
          <div className="before:content-[''] absolute top-0 right-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <div className="after:content-[''] absolute bottom-0 left-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <HiUsers className="inline-block" />
          <span className="block font-semibold mt-2 mb-2 text-2xl">50</span>
          <span className="text-blue-500 text-semibold italic">Lorem</span>
        </div>
        {/* BOX 1 */}
        {/* BOX 1 */}
        <div className="bg-white text-xl p-6 text-center opacity-80 relative transition-all hover:opacity-100 group">
          <div className="before:content-[''] absolute top-0 right-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <div className="after:content-[''] absolute bottom-0 left-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <HiUsers className="inline-block" />
          <span className="block font-semibold mt-2 mb-2 text-2xl">500K</span>
          <span className="text-blue-500 text-semibold italic">Money</span>
        </div>
        {/* BOX 1 */}
        {/* BOX 1 */}
        <div className="bg-white text-xl p-6 text-center opacity-80 relative transition-all hover:opacity-100 group">
          <div className="before:content-[''] absolute top-0 right-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <div className="after:content-[''] absolute bottom-0 left-0 w-[2px] h-[0px] bg-primary-color transition-all duration-1000 group-hover:h-full"></div>
          <HiUsers className="inline-block" />
          <span className="block font-semibold mt-2 mb-2 text-2xl">9</span>
          <span className="text-blue-500 text-semibold italic">Fix Issues</span>
        </div>
        {/* BOX 1 */}
      </div>
    </>
  );
}
