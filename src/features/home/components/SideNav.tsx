import { LuLibrary, LuPlus } from "react-icons/lu";
import Button2 from "./Button2";
import { TbWorld } from "react-icons/tb";
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
              <button className="text-[#b3b3b3] text-xl h-8 w-8  flex items-center justify-center rounded-full bg-transparent hover:bg-[#222222] hover:text-[#e9e7e7]">
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

      <footer className="p-4 flex flex-col gap-4">
        <div className="">
          <div className="flex flex-col">
            <div className="py-4 text-[#b3b3b3] text-xs flex flex-wrap gap-4 ">
              <a href="">Legal</a>
              <a href="">Safety and Privacy Center</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookies</a>
              <a href="">AboutAds</a>
              <a href="">Accessibility</a>
            </div>
            <div>
              <a className="text-white text-xs hover:underline focus:underline " href="">Cookies</a>
            </div>

          </div>
        </div>

        <div>
          <button className="text-white text-sm flex items-center gap-[2px] font-bold border border-[#b3b3b3] rounded-full py-[5px] px-[14px]">
            <TbWorld className="text-xl" />
            English
          </button>
        </div>
      </footer>
    </nav>
  );
};

export default SideNav;
