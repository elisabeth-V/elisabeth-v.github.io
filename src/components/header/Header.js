import { Link } from 'react-router-dom';
import './header-style.scss';

const Header = () => {
  return(
      <header className="header"> 
        <h1><span>MyImages</span></h1>
        <nav>
          <Link to="/more-about"><span>About the App</span></Link>
          <Link className="home-link" to='/'><span>Home</span></Link>
        </nav>
      </header>
    );
}

export default Header;