import { LuLibrary, LuPlus } from "react-icons/lu";
type SideNavProps = {
  width: number;
}

const SideNav = ({ width }: SideNavProps) => {
  return (
    <div
      style={{ width: `${width}px` }}
      className="bg-[#121212] rounded-md p-2 "
    >
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <LuLibrary className="text-[#b3b3b3] text-3xl" />
          <p className="text-[#b3b3b3] font-bold" >Your Library</p>
        </div>
        <LuPlus className="text-[#a9a9a9] text-xl" />
      </header>

      <section>

      </section>
    </div>
  );
};

export default SideNav;
