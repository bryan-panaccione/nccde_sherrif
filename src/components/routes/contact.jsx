import Navbar from "../navbar";
import Footer from "../footer";
import ContentCenter from "../centerContent";
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
            bannerID="bannerContactTitle"
          />
          <ContentCenter id="contactGroup">
            <div className="contactInfo">
              <h2>RQP Creative</h2>

              <h3>302-593-2009</h3>
              <h3>bp@rqpcreative.com</h3>
              <div>
                <p className="centerText">
                  Please reach out and tell us what you think. Any feedback,
                  positive or negative, is greatly appreciated. To speak on the
                  phone, fill out this form and provide your phone number.
                </p>
              </div>
            </div>
            <ContactForm />
          </ContentCenter>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
