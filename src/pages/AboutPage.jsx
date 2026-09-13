import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <div id="page-header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}
