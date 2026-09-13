import Projects from '../components/Portfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <>
      <div id="page-header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <Projects />
      <Footer />
    </>
  );
}
