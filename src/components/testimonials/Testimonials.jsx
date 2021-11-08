import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: '1',
      name: 'Black Night',
      title: 'Senior Developer',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
      icon: './assets/rightArrow.png',
      desc: 'Lorem do your duty 1',
    },
    {
      id: '2',
      name: 'White Panther',
      title: 'Web Developer',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
      icon: './assets/rightArrow.png',
      desc: 'Lorem do your duty 2222',
      featured: true,
    },
    {
      id: '3',
      name: 'Super Man',
      title: 'Mobile Developer',
      img: 'https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=1600x1200',
      icon: './assets/rightArrow.png',
      desc: 'Lorem do your duty 333333333',
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'} key={d.id}>
            <div className="top">
              <img
                className="left"
                src="assets/rightArrow.png"
                alt="Left Testimonial Image"
              />
              <img className="user" src={d.img} alt="User Testimonial Image" />
              <img
                className="right"
                src={d.icon}
                alt="Right Testimonial Image"
              />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
