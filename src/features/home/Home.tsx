// import Navbar from "./components/Navbar"

// const Home = () => {
//   return (
//     <div className="bg-[#000000] w-full h-screen">
//         <Navbar />



//         <footer className="p-2 static w-full h-[66px] items-center justify-center">
//           <div className="bg-gradient-to-r from-[#af2896] to-[#509bf5] w-full h-[60px]">
//             <p></p>
//             <div className="">
//               <p></p>

//             </div>
//           </div>
//         </footer>
//     </div>
//   )
// }

// export default Home


import Navbar from "./components/Navbar"
import SideNav from "./components/SideNav"

const Home = () => {
  return (
    <div className="bg-[#000000] w-full min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <SideNav />
        
      </div>

      <footer className="p-2 w-full flex items-center">
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
