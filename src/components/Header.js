import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import data from "../data";

const Header = () => {
    return (
        <div className="contact_card">
            <img src={process.env.PUBLIC_URL + data.profileImage} alt={data.title} className="card_img"/>
            <div className="card_info">
                <h3 className="card_name">{data.name}</h3>
                <p className="card_title">{data.title}</p>
                <p className="card--portfolio_link">{data.portfolio}</p>
            </div>
            <div className="social_info">
                <button className="email">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    email
                </button>
                <button className="linkInd">
                <span>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </span>
                linkedIn
                </button>
            </div>
        </div>
    )
}

export default Header;