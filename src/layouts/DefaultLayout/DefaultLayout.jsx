import Header from "../components/Header/Header"
import Home from "../../pages/Home"
import Footer from "../components/Footer/Footer";


function DefaultLayout() {
    return ( 
            <div>
                <Header />
                <div className="absolute top-0 w-full bg-zinc-800">
                    <Home />
                    <Footer />
                </div>
            </div>
     );
}

export default DefaultLayout;