import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import data from "../data";

const Header = () => {
    return (
        <div className="card_header">
            <img src={process.env.PUBLIC_URL + data.profileImage} alt={data.title} className="header_img padding" />
            <div className="header_info">
                <h3 className="header_name">{data.name}</h3>
                <p className="header_title">{data.title}</p>
                <a href={data.portfolio} target="_blank" rel="noreferrer" className="portfolio_link" >Take a tour</a>
            </div>
            <div className="header_social">
                <button className="email">
                    <FontAwesomeIcon icon={faEnvelope} className="fa_icon"></FontAwesomeIcon>
                    email
                </button>
                <button className="linkInd">
                    <FontAwesomeIcon icon={faLinkedin} className="fa_icon"></FontAwesomeIcon>
                    linkedIn
                </button>
            </div>
        </div>
    )
}

export default Header;