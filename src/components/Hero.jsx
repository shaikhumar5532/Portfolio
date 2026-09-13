import Navbar from './Navbar';

export default function Hero() {
  return (
    <div id="header">
      <div className="container">
        <Navbar />
        <div className="header-text">
          <p>Full Stack Web Developer</p>
          <h1>Hi, i&apos;m Shaikh<br /><span>Umar</span> From India</h1>
        </div>
      </div>
    </div>
  );
}
