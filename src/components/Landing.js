import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

import data from "../data";

const Landing = () => {
    return (
        <div className="landing_page">
            <About aboutText={data.about} />
            <Interests interestsText={data.interests} />
            
            <Footer 
                twitter={data.social.twitter}
                facebook={data.social.facebook}
                instagram={data.social.instagram}
                linkedIn={data.social.linkedIn}
                github={data.social.github} 
            />
        </div>
    )
}

export default Landing;