import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logogif.gif';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
            
        </Link>
    </div>
    )


export default Sidebar