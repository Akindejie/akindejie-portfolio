import './works.scss';
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: './assets/rightArrow.png',
      title: 'web Design',
      desc: 'Lorem do your duty',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
    },
    {
      id: '2',
      icon: './assets/rightArrow.png',
      title: 'Mobile Design',
      desc: 'Lorem do your duty',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
    },
    {
      id: '3',
      icon: './assets/rightArrow.png',
      title: 'Graphic Design',
      desc: 'Lorem do your duty',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Avatar" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200"
                  alt="Work Samples"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

<div className="slider">
  {data.map((d) => (
    <div className="container" key={d.id}>
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={d.icon} alt="Avatar" />
            </div>
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
            <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img
            src="https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200"
            alt="Work Samples"
          />
        </div>
      </div>
    </div>
  ))}
</div>;
