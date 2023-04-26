import { NavLink } from "react-router-dom";

function SignupForm() {
    return ( 
    <>  
        <form>
            <div>
                <div>
                    <label>Sign up</label>
                </div>
                <div>
                    <div>
                        <input type="text" placeholder="username" name=""/>
                    </div>
                    <div>
                        <input type="password" placeholder="password" name=""/>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div>Sign up</div>
                    <div>
                        <NavLink to={"/auth/login"}>
                            Sign in
                        </NavLink>
                    </div>
                </div>
            </div>
        </form>
    </> 
    );
}

export default SignupForm;