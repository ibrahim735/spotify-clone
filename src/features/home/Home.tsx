import Navbar from "./components/Navbar"
import { useState } from "react";
import Sidebar from "./components/SideNav";
import ResizableDivider from "./components/ResizableDivider";
import MainContent from "./components/MainContent";



const Home = () => {
  const [sidebarWidth, setSidebarWidth] = useState(330);

  const handleResize = (newWidth: number) => {
    if (newWidth >= 340 && newWidth <= 620) {
      setSidebarWidth(newWidth);
    }
  };
  return (
    <div className="bg-[#000000] w-full min-h-screen flex flex-col p-2">
      <Navbar />

      <div className="flex h-fit py-2">
        <Sidebar width={sidebarWidth} />
        <ResizableDivider onResize={handleResize} />
        <MainContent />
      </div>



      <footer className=" w-full flex items-center">
        <div className="bg-gradient-to-r from-[#af2896] to-[#509bf5] w-full h-[66px] p-3 ">
          <p className="text-white text-sm font-bold">Preview of Spotify</p>
          <p className="text-white font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}

export default Home
