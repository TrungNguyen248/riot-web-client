import Header from "../components/Header/Header"
import Home from "../../pages/Home"


function DefaultLayout() {
    return ( 
        <div className={""}>
            <Header />
            <Home />
        </div>
     );
}

export default DefaultLayout;