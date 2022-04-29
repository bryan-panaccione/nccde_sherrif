import Navbar from "../navbar";
import Footer from "../footer";

import Banner from "../banner";

function Tradesmen() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav2" />
        </header>
        <div>
          <Banner
            id="contactBanner"
            title="Tradesmen"
            tagLine="Verified, Trusted and Reliable Tradesmen in New Castle County"
            bannerID="bannerContactTitle"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Tradesmen;
