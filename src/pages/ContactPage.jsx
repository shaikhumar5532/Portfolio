import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <div id="page-header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
