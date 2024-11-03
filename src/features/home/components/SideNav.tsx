import { LuLibrary } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";

const Sidebar = ({ width }: { width: number }) => {
  return (
    <div
      className="bg-[#121212] h-[506px] rounded-md"
      style={{ width: `${width}px` }}
    >
      <header className="flex items-center gap-20 fixed w-full h-[10%] p-4 shadow-lg shadow-[#121212]">
        <div className="flex items-center gap-2">
          <LuLibrary className="text-3xl text-[#b3b3b3]" />
          <p className="text-[#b3b3b3] font-bold">Your Library</p>
        </div>
        <IoMdAdd className="text-[#8a8a8a] text-2xl" />
      </header>

      <div className="">
        
      </div>
    </div>
  );
};

export default Sidebar;

