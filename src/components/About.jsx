import { useState } from 'react';

const tabs = ['skills', 'experience', 'education'];

const tabContent = {
  skills: (
    <ul>
      <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
      <li><span>Web Development</span><br />Web app Development</li>
      <li><span>App Development</span><br />Building Android/iOS apps</li>
    </ul>
  ),
  experience: (
    <ul>
      <li><span>2024 – 2025</span><br />Internship at Varcons Technologies</li>
    </ul>
  ),
  education: (
    <ul>
      <li><span>2022</span><br />Computer Science Engineering (BE) from Visvesvaraya Technological University</li>
      <li><span>2019</span><br />12th from Shanti Niketan Sr Secondary School</li>
      <li><span>2017</span><br />10th from Shanti Niketan Sr Secondary School</li>
    </ul>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/MyPic.jpeg" alt="Shaikh Umar" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I&apos;m Umar, a passionate and dedicated Computer Science Engineering student,
              who does vibe coding in India with a strong foundation in web development, Java
              programming, and generative AI. I specialize in building dynamic, user-friendly web
              applications and developing efficient algorithms using Java.
              <br /><br />
              With a keen interest in software development and emerging technologies, I am eager to
              apply my technical expertise to real-world projects and contribute to innovative
              solutions. I thrive on solving complex problems, learning new skills, and collaborating
              with diverse teams.
              <br /><br />
              Currently exploring opportunities to expand my knowledge and refine my skills in
              software development, AI, and web technologies, I am always open to connecting with
              like-minded professionals and organisations driving technological advancements.
            </p>

            <div className="tab-titles">
              {tabs.map((tab) => (
                <p
                  key={tab}
                  className={`tab-links${activeTab === tab ? ' active-link' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              ))}
            </div>

            {tabs.map((tab) => (
              <div
                key={tab}
                id={tab}
                className={`tab-contents${activeTab === tab ? ' active-tab' : ''}`}
              >
                {tabContent[tab]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
