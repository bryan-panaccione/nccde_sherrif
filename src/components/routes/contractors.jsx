import Navbar from "../navbar";
import Footer from "../footer";

import Banner from "../banner";

function Contractors() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav2" />
        </header>
        <div>
          <Banner
            id="contactBanner"
            title="Contractors"
            tagLine="Verified, Trusted and Reliable Contractors in New Castle County"
            bannerID="realtorBanner"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contractors;
