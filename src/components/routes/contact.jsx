import Navbar from "../navbar";
import Footer from "../footer";

import Banner from "../banner";

import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav" />
        </header>
        <div>
          <Banner id="propPageBanner" title="Contact Us" tagLine="x" />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
