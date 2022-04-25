import Navbar from "../navbar";
import Footer from "../footer";
import RealtorList from "../realtorList";
import Banner from "../banner";

function Realtors() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav2" />
        </header>
        <div>
          <Banner
            id="contactBanner"
            title="Realtors"
            tagLine="Verified, Trusted and Reliable Realtors in New Castle County"
            bannerID="realtorBanner"
          />
          <RealtorList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Realtors;
