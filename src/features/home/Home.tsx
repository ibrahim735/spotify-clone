import Button2 from "./components/Button2"
import Navbar from "./components/Navbar"
import ResizableComponent from "./components/ResizeableComponent"

const code: string | null = new URLSearchParams(window.location.search).get('code')


const Home = () => {

  return (code ? "we have a code" :
    <div className="bg-[#000000] w-full min-h-screen flex flex-col p-2">
      <Navbar />

      <ResizableComponent code={code} />

      <footer className=" flex items-center bg-gradient-to-r from-[#af2896] to-[#509bf5] w-full h-[66px] p-3 justify-between">
        <div>
          <p className="text-white text-sm font-bold">Preview of Spotify</p>
          <p className="text-white font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>

        <div className="px-2">
          <Button2 text="Sign up free" />
        </div>
      </footer>
    </div>
  )
}

export default Home
