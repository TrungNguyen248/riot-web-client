import { NavLink } from "react-router-dom";
import { ArrowRight } from "../Icons/Icons";

function LoginForm() {
    return ( 
    <>  
        <form>
            <div className={"relative w-90 bg-white py-20 px-10 max-w-2xl"}>
                <div>
                    <h3 className={"text-xl font-bold text-center mb-16"}>Sign In</h3>
                </div>
                <div>
                    <div className="relative mb-2">
                        <input 
                            className="input_custom w-full h-14 bg-zinc-100 border-2 rounded-md text-sm font-bold pl-2" 
                            type="text" 
                            placeholder=" " 
                            name=""/>
                        <label className="txt_username text-color-text-tag-news absolute font-semibold text-sm top-1/2 -translate-y-1/2 left-4 transition-all duration-200 ease-linear pointer-events-none">Username</label>
                    </div>
                    <div className="relative mb-2">
                        <input 
                            className="input_custom w-full h-14 bg-zinc-100 border-2 rounded-md text-sm font-bold pl-2" 
                            type="password"
                            placeholder=" " name=""/>
                        <label className="txt_username text-color-text-tag-news absolute font-semibold text-sm top-1/2 -translate-y-1/2 left-4 transition-all duration-200 ease-linear pointer-events-none">Password</label>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="w-14 h-14 rounded-2xl flex items-center justify-center bg-red-600">
                            <ArrowRight />
                        </button>
                    </div>
                    <div>
                        <NavLink to={"/auth/signup"}>
                            <p className="absolute text-tiny font-bold bottom-10 left-1/2 -translate-x-1/2 uppercase ">
                                Create Account
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </form>
    </> 
    );
}

export default LoginForm;