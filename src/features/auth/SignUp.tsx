import { buttonContents } from "./LoginPage"
import Button from "../../common/components/Button.tsx";
import { Link } from "react-router-dom";
import Footer from "./components/FooterAuth.tsx"
import Header from "./components/HeaderAuth.tsx"


const SignUp = () => {
    const firstThreeButtons = buttonContents.slice(0, 3);
    return (
        <div className="bg-[#000] w-full h-fit">
            <Header />
            <section className="flex flex-col items-center justify-center">
                <div className="w-[324px]">
                    <header>
                        <h1 className="text-white text-5xl font-bold text-center">Sign up to <br /> start listening</h1>
                    </header>
                    <form className="flex flex-col pt-10">
                        <div className="mb-2">
                            <label className="text-white text-sm font-bold" htmlFor=""> Email address</label>
                        </div>
                        <div className="flex flex-col gap-3">
                            <input className="px-3 py-[10px] rounded-md bg-transparent outline-none hover:border-white border border-[#7c7c7c] placeholder-[#b3b3b3]" placeholder="name@domain.com" type="email" name="" id="" />
                            <div>
                                <a className="text-[#1ed760] text-sm font-semibold underline" href="">Use phone number instead.</a>
                            </div>
                        </div>

                        <button className="mt-5 px-2 py-[12px] rounded-full border-transparent text-base font-semibold w-full bg-[#1ed760] hover:brightness-125" type="submit">Next</button>
                    </form>

                    <div className="flex items-center py-8">
                        <div className="flex-grow border-t border-[#7c7c7c]"></div>
                        <span className="px-3 text-sm font-bold text-white">or</span>
                        <div className="flex-grow border-t border-[#7c7c7c]"></div>
                    </div>

                    <div>
                        <div className=" flex flex-col gap-2">
                            {firstThreeButtons.map((data) => (
                                <Button key={data.id} icon={data.icon} text={data.text} />
                            ))}
                        </div>
                        <hr className="my-7 w-full border-[#302f2f]" />
                        <p className=" flex text-center justify-center gap-2" ><span className="text-[#b3b3b3]">Already have an account? <Link className="underline text-white" to="/login">Log in here.</Link></span></p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SignUp