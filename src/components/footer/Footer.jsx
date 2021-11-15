import React from 'react';
import './footer.scss';
import Fade from 'react-reveal/Fade';
import { GitHub, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <Fade bottom>
          <div className="link-list">
            <ul>
              <li>
                <a
                  href="https://github.com/Akindejie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </a>
              </li>
              <li>
                <a
                  href="http://linkedin.com/in/akindeji-lasisi-178899198"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/akindejie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://mobile.twitter.com/Akindejie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Footer;
