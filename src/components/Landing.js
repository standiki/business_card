import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

import data from "../data";

const Landing = () => {
    return (
        <div className="landing_page">
            <About aboutText={data.about}></About>
            <Interests interestsText={data.interests}></Interests>
            <Footer/>
        </div>
    )
}

export default Landing;