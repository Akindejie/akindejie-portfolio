import './testimonials.scss';
import Zoom from 'react-reveal/Zoom';
import {
  LinkedIn,
  ThreeDRotation,
  Twitter,
  Instagram,
  ImportantDevices,
  DevicesOther,
} from '@mui/icons-material';

export default function Testimonials() {
  const data = [
    {
      id: '1',
      name: 'Maximilian Mason',
      title: 'Site Texting',
      img: './assets/maximilian.jpg',
      leftIcon: <DevicesOther />,
      rightIcon: <Twitter />,
      desc: 'It was really nice working with him, and i highly recommend him to anyone.',
    },
    {
      id: '2',
      name: 'Taiwo Ajibode',
      title: 'Web Development',
      img: './assets/taiwo.jpg',
      leftIcon: <ImportantDevices />,
      rightIcon: <LinkedIn />,
      desc: 'I speak for Akindeji when I tell you how pleased we are with the web site he designed for us. The district needed a site that addressed varied aspects of our operation. He met those needs and then some more!!! ',
      featured: true,
    },
    {
      id: '3',
      name: `Emma O'Kane`,
      title: '3D Graphics',
      img: './assets/emma.jpg',
      leftIcon: <ThreeDRotation />,
      rightIcon: <Instagram />,
      desc: `I'm Emma, and I proactively offered, and wanted, to write a testimonial for Akindeji's artwork. Finding him on Instagram, I was so impressed with his original designs, I contacted him to bring my original design to life.`,
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <Zoom left>
        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? 'card featured' : 'card'} key={d.id}>
              <div className="top">
                <div className="left"> {d.leftIcon}</div>
                <img src={d.img} alt="Testimonial" className="user" />
                <div className="right"> {d.rightIcon}</div>
              </div>
              <div className="center">{d.desc} </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
}
