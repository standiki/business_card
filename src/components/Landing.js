import Header from "./Header";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

const Landing = () => {
    return (
        <div className="profile_details">
            <Header />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Landing;