import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GrFolderOpen } from "react-icons/gr";
import Button2 from "./Button2";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="text-white text-[33px] pl-5 ">
        <Link to="/"><FaSpotify /></Link>
      </div>

      <div className="flex items-center justify-center w-[43%] px-2 gap-4">

        <div className="w-12 h-12 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:scale-[1.05]">
          <MdHomeFilled className="text-3xl text-white" />
        </div>

        <form action="" className="w-[85%]">
          <div className="flex items-center bg-[#1f1f1f] rounded-full px-3 py-3">
            <div>
              <IoSearch className="text-[#b3b3b3] text-2xl" />
            </div>

            <div className="flex items-center w-full">
              <input
                className="placeholder-[#b3b3b3] w-full bg-transparent px-3 outline-none text-white"
                placeholder="What do you want to play?"
                type="search"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-6 w-[1px] bg-[#7c7c7c]"></div>
              <GrFolderOpen className="text-white text-2xl font-bold" />
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/signup"><button className="font-bold text-[#b3b3b3]">Sign up</button></Link>

        <Link to="/login">
          <Button2 text="Log in" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
