import { Link } from 'react-router-dom';
import { StyledNavLink } from '../../app-styled'; 

const Header = () => {
  return(
    <header className="header">
      <h1>ElisabethVicente<span>Front End Developer.</span></h1>
      <nav>
        <Link to="/"><StyledNavLink $isPrimary>Home</StyledNavLink></Link>
        <Link to="/currency-converter"><StyledNavLink $isPrimary={false}>Currency Converter</StyledNavLink></Link>
        <Link to="/content-page"><StyledNavLink $isPrimary={false}>Images Api</StyledNavLink></Link>
        <Link to="/contact"><StyledNavLink $isPrimary={false}>Contact</StyledNavLink></Link>
      </nav>
      <a className="linkedin" href="https://www.linkedin.com/in/elisabeth-vicente-frontend-dev/" target='_blank'>
        <img src='/linkedin-icon.svg' alt='join me on linkedin' />
      </a>
    </header>
  );
}

export default Header;