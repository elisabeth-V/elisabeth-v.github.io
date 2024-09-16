import { Link } from "react-router-dom";
import { StyledBlockCta } from "../../app-styled";
import './homepage.scss';


const Homepage = () => {
  return(
    <div className="centreWrp">
      <section className="introduction">
        <p className="emphasised">Hi, I'm Elisabeth</p>
        
        <h1><span>Frontend</span> <span>Developer</span></h1>
        <p className="emphasised">Based in London, United Kingdom </p>

        
        <div className="block-ctas">
          <Link to="/contact"><StyledBlockCta  $isSecondaryColor={false}>Contact Me</StyledBlockCta></Link>
          <a href='/vicente_elisabeth-cv-2024.pdf' target="_blank"><StyledBlockCta $isSecondaryColor>Download resume</StyledBlockCta></a>
        </div>
      </section>
    </div>
  );
}

export default Homepage;