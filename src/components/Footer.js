import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;