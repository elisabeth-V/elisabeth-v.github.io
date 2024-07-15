import { Link } from 'react-router-dom';
import { StyledNavLink } from '../../app-styled'; 

const Header = () => {
  return(
    <header className="header"> 
      <nav>
        <Link className='nav-link' to="/"><StyledNavLink $isPrimary >Homepage</StyledNavLink></Link>
        <Link className="nav-link" to="/contact"><StyledNavLink $isPrimary={false}>Contact Me</StyledNavLink></Link>
        <Link className="nav-link" to="/content-page"><StyledNavLink $isPrimary={false}>My images</StyledNavLink></Link>
      </nav>
    </header>
  );
}

export default Header;