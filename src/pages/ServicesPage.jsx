import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <div id="page-header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}
