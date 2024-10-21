import { FaSpotify } from "react-icons/fa";
import { buttonContents } from "./LoginPage"
import Button from "../../common/components/Button.tsx";
import { Link } from "react-router-dom";


const SignUp = () => {
    const firstThreeButtons = buttonContents.slice(0, 3);
    return (
        <div className="bg-[#000] w-full h-fit">
            <header className="flex items-center justify-center p-8">
                <FaSpotify className="text-[40px] text-white" />
            </header>
            <section className="flex flex-col items-center justify-center">
                <div className="">
                    <header>
                        <h1 className="text-white text-5xl font-bold text-center">Sign up to <br /> start listening</h1>
                    </header>
                    <form className="flex flex-col pt-8">
                        <label className="text-white text-base font-semibold pb-2" htmlFor=""> Email address</label>
                        <div className="flex flex-col gap-3">
                            <input className="px-2 py-[10px] rounded-md bg-transparent focus:outline-none border-2 border-customGray" placeholder="name@domain.com" type="email" name="" id="" />
                            <a className="text-spotifyGreen text-sm font-semibold underline" href="">Use phone number instead.</a>
                        </div>

                        <button className="mt-5 px-2 py-[12px] rounded-full border-transparent text-base font-semibold w-[324px] bg-spotifyGreen hover:bg-spotifyGreenHover hover:scale-[1.03]" type="submit">Next</button>
                    </form>
                    <div>
                        <div></div>
                        <div className="mt-8 flex flex-col gap-2">
                            {firstThreeButtons.map((data) => (
                                <Button key={data.id} icon={data.icon} text={data.text} />
                            ))}
                        </div>
                        <hr className="my-10 w-full border-customGray" />
                        <p className=" flex text-center justify-center gap-2" ><span className="text-stone-400">Already have an account? <Link className="underline text-white" to="/login">Log in here.</Link></span></p>
                    </div>
                </div>
            </section>

            <footer className="p-6">
                <p className="text-center text-stone-300 font-normal text-xs">This site is protected by reCAPTCHA and the Google <br /> <a className="underline" href="https://policies.google.com/privacy">Privacy Policy</a> and <a className="underline" href="https://policies.google.com/terms">Terms of Service</a> apply</p>
            </footer>
        </div>
    )
}

export default SignUp