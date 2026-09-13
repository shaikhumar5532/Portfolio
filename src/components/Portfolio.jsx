const aiProjects = [
  {
    icon: 'fa-solid fa-disease',
    title: 'Breast Cancer Detection',
    description:
      'A Matrix-themed desktop app that detects breast cancer tumors from mammogram images using a custom-trained YOLOv8 model. Features animated Tkinter GUI, real-time logs, and dual modes — Image Scan and Webcam Demo.',
    tech: ['Python', 'YOLOv8', 'Tkinter', 'OpenCV'],
    link: 'https://github.com/shaikhumar5532/Brest_cancer-detection',
  },
  {
    icon: 'fa-solid fa-car',
    title: 'Vehicle Detection',
    description:
      'A real-time vehicle detection system powered by YOLOv8. Detects and classifies vehicles from images, videos, and live webcam feed with high accuracy using a custom-trained YOLO model.',
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    link: 'https://github.com/shaikhumar5532/Vehicle_detection',
  },
  {
    icon: 'fa-solid fa-gun',
    title: 'Weapon Detection AI',
    description:
      'A real-time weapon detection system built with YOLOv8, OpenCV, and Tkinter. Detects pistols, grenades, rifles, knives, and missiles from images, videos, and webcam feed using a Matrix-themed interface.',
    tech: ['Python', 'YOLOv8', 'Tkinter', 'OpenCV'],
    link: 'https://github.com/shaikhumar5532/weapon_detection_ai',
  },
];

const mernProjects = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Portfolio Website',
    description:
      'A responsive and interactive portfolio site built with HTML, CSS, and JavaScript. Features smooth animations, clean UI, and a fully mobile-friendly design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/shaikhumar5532/Portfolio',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'Shopping Management System',
    description:
      'A full-featured MERN e-commerce platform with product browsing, search & filters, cart management, and secure JWT-authenticated checkout with user/admin roles.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/shaikhumar5532/Shoppinh-Management',
  },
  {
    icon: 'fa-solid fa-house',
    title: 'Wanderlust – Airbnb Clone',
    description:
      'An Airbnb-inspired rental property web app with full CRUD listings, RESTful APIs, MongoDB data models, and a responsive EJS & Bootstrap UI.',
    tech: ['MongoDB', 'Express', 'EJS', 'Node.js'],
    link: 'https://github.com/shaikhumar5532/WanderLust-app',
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>

        {/* ── AI PROJECTS ── */}
        <div className="project-category">
          <h2 className="category-title">
            <i className="fa-solid fa-robot"></i> AI Projects
          </h2>
          <div className="ai-project-list">
            {aiProjects.map((project) => (
              <div className="ai-card" key={project.title}>
                <div className="ai-card-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="ai-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View on GitHub <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MERN STACK PROJECTS ── */}
        <div className="project-category">
          <h2 className="category-title">
            <i className="fa-solid fa-layer-group"></i> MERN Stack Projects
          </h2>
          <div className="ai-project-list">
            {mernProjects.map((project) => (
              <div className="ai-card" key={project.title}>
                <div className="ai-card-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="ai-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View on GitHub <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="https://github.com/shaikhumar5532" target="_blank" rel="noreferrer" className="btn">
          See More on GitHub
        </a>
      </div>
    </div>
  );
}

