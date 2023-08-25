
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    return (
      <>
      <div className='sampath'>
        <footer className="upper-footer">
          <div className="github-logo">
          <a href="https://github.com/sampath112" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          </div>
        </footer>
        <footer className="lower-footer">
          <p className="footer-text">
            2023 Copyright Raj Reddy Center For Technology And Society. All Rights Reserved.
          </p>
        </footer>
        </div>
      </>
    );
  };

export  default Footer;