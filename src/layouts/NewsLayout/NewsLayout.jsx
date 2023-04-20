
import News from "../../pages/News";
import Header from "../components/Header"
import Footer from "../components/Footer/Footer";


function NewsLayout() {
    return ( 
        <div>
            <Header bg_color_custom={"bg-black"}/>
            <div className="absolute top-24 w-full">
                <News />
                <div className="relative">
                    <Footer />
                </div>
            </div>
        </div>
     );
}

export default NewsLayout;