import { Link } from 'react-router-dom';
import { StyledNavLink } from '../../app-styled'; 

const Header = () => {
  return(
    <header className="header"> 
      <nav>
        <Link className='nav-link' to="/"><StyledNavLink $isPrimary >Homepage</StyledNavLink></Link>
        <Link className="nav-link" to="/content-page"><StyledNavLink $isPrimary={false}>Images Api</StyledNavLink></Link>
        <Link className="nav-link" to="/contact"><StyledNavLink $isPrimary={false}>Json List</StyledNavLink></Link>
        <Link className="nav-link" to="/control-panel"><StyledNavLink $isPrimary={false}>Control Panel</StyledNavLink></Link>
      </nav>
    </header>
  );
}

export default Header;