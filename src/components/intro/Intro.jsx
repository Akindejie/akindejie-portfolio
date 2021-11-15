import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Fade, Flip } from 'react-reveal';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Web Designer', 'Technical Support'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Flip left>
        <div className="left">
          <div className="imgContainer">
            <img src="assets/dejiCartoon.png" alt="Deji Cartoon" />
          </div>
        </div>
      </Flip>
      <Fade bottom>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Akindeji Lasisi</h1>
            <h3>
              Freelance <span ref={textRef} />
            </h3>
            <div className="skills">
              <div className="skills-wrapper">
                <div className="skills-item">React</div>
                <div className="skills-item">JavaScript</div>
                <div className="skills-item">TypeScript</div>
                <div className="skills-item">SASS</div>
                <div className="skills-item">Node</div>
                <div className="skills-item">Redux</div>
                <div className="skills-item">Firebase</div>
              </div>
            </div>
          </div>
          <a href="#portfolio">
            <DoubleArrowIcon className="arrow-down" />
          </a>
        </div>
      </Fade>
    </div>
  );
}
