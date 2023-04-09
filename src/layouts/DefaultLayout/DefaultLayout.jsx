import Header from "../components/Header/Header"
import Home from "../../pages/Home"
import AuthProvider from "../../context/AuthProvider";


function DefaultLayout() {
    return ( 
        <AuthProvider>
            <div className={""}>
                <Header />
                <Home />
            </div>
        </AuthProvider>
     );
}

export default DefaultLayout;