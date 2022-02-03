import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import data from "../data";

const Info = () => {
    return (
        <div className="info_container">
            <img src={process.env.PUBLIC_URL + data.profileImage} alt={data.name} className="info_img" />
            <div className="info">
                <h3 className="info_name">{data.name}</h3>
                <p className="info_title">{data.title}</p>
                <a href={data.portfolio} target="_blank" rel="noreferrer" className="info_link" >Take a tour</a>
            </div>
            <div className="info_btn">
                <button className="email_btn">
                    <FontAwesomeIcon icon={faEnvelope} className="fa_icon"></FontAwesomeIcon>
                    email
                </button>
                <button className="linkInd_btn">
                    <FontAwesomeIcon icon={faLinkedin} className="fa_icon"></FontAwesomeIcon>
                    linkedIn
                </button>
            </div>
        </div>
    )
}

export default Info;