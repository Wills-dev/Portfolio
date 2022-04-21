import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/gif0.gif';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" className="links home-link" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="links about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="links contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ejiogu-victor-4b594916a'>
                <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='http://Github.com/wills-dev'>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/Willsssss_'>
                <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
        </ul>
    </div>
    )


export default Sidebar