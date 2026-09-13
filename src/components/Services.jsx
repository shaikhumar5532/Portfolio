const services = [
  {
    icon: 'fa-solid fa-crop-simple',
    title: 'UI/UX Design',
    description:
      'I design clean, user-friendly interfaces that make websites and apps easy to use and visually appealing. With a strong focus on user experience, I aim to create smooth and intuitive designs that solve real problems and enhance user interaction.',
    link: 'https://github.com/shaikhumar5532',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Design',
    description:
      'I create responsive, visually appealing websites that combine modern design with smooth functionality to deliver a great user experience across all devices.',
    link: 'https://github.com/shaikhumar5532',
  },
  {
    icon: 'fa-brands fa-adn',
    title: 'App Design',
    description:
      'I design clean, intuitive mobile and web app interfaces focused on user experience and functionality. My goal is to create layouts that are easy to navigate, visually appealing, and optimized for seamless interaction across different devices and screen sizes.',
    link: 'https://github.com/shaikhumar5532',
  },
];

export default function Services() {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.title}>
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link} target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
