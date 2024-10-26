import Header from "./components/HeaderAuth"
import Footer from "./components/FooterAuth"

const ForgotPassword = () => {
  return (
    <div className="bg-[#000] w-full h-fit">
      <Header />

      <section className="flex flex-col items-center justify-center ">
        <div className="w-[324px] h-[469px]">
          <form>
            <h1 className="text-white text-[33px] font-bold text-center">Reset your password</h1>
            <p className="text-white text-base font-medium mt-4">Enter the email address or username linked to your Spotify account and we'll send you an email.</p>

            <div className="">
              <h2 className="text-white text-sm font-bold">
                <label htmlFor="">Email address or username</label>
              </h2>
              <input className=" w-full px-2 py-[10px] mt-2 rounded-md bg-transparent focus:outline-none border hover:border-white border-customGray" type="email" name="" id="" />
            </div>
            <p className="mt-4">
              <a className="text-white hover:text-spotifyGreen text-sm font-semibold underline" href="">Need support?</a>
            </p>
            <button className="mt-7 px-2 py-[12px] rounded-full border-transparent text-base font-semibold w-full bg-spotifyGreen hover:bg-spotifyGreenHover" type="submit">Send link</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ForgotPassword