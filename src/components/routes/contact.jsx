import Navbar from "../navbar";
import Footer from "../footer";

import Banner from "../banner";

import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav2" />
        </header>
        <div>
          <Banner
            id="contactBanner"
            title="Contact Us"
            tagLine="We love feedback and Questions"
          />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
