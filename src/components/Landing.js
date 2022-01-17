import About from "./About";
import Interests from "./Interests";

import data from "../data";

const Landing = () => {
    return (
        <div className="landing_page">
            <About aboutText={data.about} />
            <Interests interestsText={data.interests} />
        </div>
    )
}

export default Landing;