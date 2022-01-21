import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ twitter, facebook, instagram, linkedIn, github }) => {

    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href={twitter} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitterSquare} className="faIcon" ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href={facebook} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="faIcon" ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href={instagram} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagramSquare} className="faIcon" ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href={linkedIn} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="faIcon" ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href={github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} className="faIcon" ></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;