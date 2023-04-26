import { RiotMenuSwitchIcon } from "../../components/Icons/Icons";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
    return ( 
        <>
            <div>
                <div className="absolute top-5 left-10 fill-white ">
                    <RiotMenuSwitchIcon width="8rem" height="5rem"/>
                </div>
                <div className="w-full h-screen fixed -z-10">
                    <div className={"bg-[url('https://lolstatic-a.akamaihd.net/rso-login-page/3.2.36/assets/arcane_dsktp_centerAlignedCrd_BG_2x.jpg')] bg-center bg-cover w-full h-full"}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login;