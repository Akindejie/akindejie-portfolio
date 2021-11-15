import './works.scss';
import Slider from 'react-slick';
import { projects } from './wordData';

export default function Works() {
  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  let settings = {
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <div className="works" id="works">
      <h1>Past Works</h1>
      <div className="classicSlider">
        <Slider {...settings}>
          {projects.map((d, index) => (
            <div className="work-slide" key={index}>
              <img src={d.img} alt="slider" key={index} className="image" />
              <a href={d.link} target="_blank" rel="noreferrer">
                <span>{d.desc}</span>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
