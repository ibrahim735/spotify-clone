import { LuLibrary, LuPlus } from "react-icons/lu";
import Button2 from "./Button2";
type SideNavProps = {
  width: number;
}

const SideNav = ({ width }: SideNavProps) => {
  return (
    <nav
      style={{ width: `${width}px` }}
      className="bg-[#121212] rounded-md p-2 "
    >
      <div className="h-[55%] ">
        <div className="h-[76px] w-full ">
          <header className="p-3">
            <div className="flex justify-between">
              <button className="text-[#C7C7C7] flex items-center gap-2 hover:text-[white]">
                <LuLibrary className="text-3xl" />
                <p className="font-bold">Your Library</p>
              </button>
              <button className="text-[#C5C5C5] text-xl">
                <LuPlus />
              </button>
            </div>
          </header>
        </div>
        <div className="h-[198px] w-full p-[1px] flex flex-col gap-6 overflow-y-scroll">
          <div className="bg-[#1F1F1F] w-full h-fit rounded-md p-4 flex flex-col gap-5">
            <div className="text-white flex flex-col gap-1">
              <span className="font-bold">Create your first playlist</span>
              <span className="font-medium text-sm">It's easy, we'll help you</span>
            </div>
            <div>
              <Button2 text="Create playlist" slim={true} />
            </div>
          </div>

          <div className="bg-[#1F1F1F] w-full h-fit rounded-md p-4 flex flex-col gap-5">
            <div className="text-white flex flex-col gap-1">
              <span className="font-bold">Let's find some podcasts to follow</span>
              <span className="font-medium text-sm">We'll keep you updates on new episodes</span>
            </div>
            <div>
              <Button2 text="Browse podcasts" slim={true} />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="">
          
        </div>

        <div className="">

        </div>
      </footer>
    </nav>
  );
};

export default SideNav;
