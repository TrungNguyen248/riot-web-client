import About  from "../../pages/About"
import Header from "../components/Header";
import Footer from "../components/Footer"

function AboutLayout() {
    return ( 
            <div className="">
                <Header bg_color_custom={"bg-black"}/>
                <div className="relative top-20 w-full">
                    <About />
                    <Footer />
                </div>
            </div>
     );
}

export default AboutLayout;