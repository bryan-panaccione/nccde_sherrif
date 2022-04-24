import Navbar from "./components/navbar";
import Banner from "./components/banner";
import DataButton from "./components/testComp";
import ContentCenter from "./components/centerContent";
import ContentLeft from "./components/contentLeft";
import ContentRight from "./components/contentRight";
import PriceCard from "./components/priceCard";
import Footer from "./components/footer";
import "./App.css";
import DemoVideo from "./components/demoVideo";

function App() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar />
        </header>
        <div>
          <Banner
            title="Parse"
            tagLine="Data Parsing and Visualization Software"
          />
          <DemoVideo />
          <ContentLeft>
            <img
              className="contentImage"
              src="/img/mapIcon.svg"
              alt="Not Found"
            />
            <div className="wordsContainer">
              <h2>Property Mapping</h2>
              <p>
                Visualize property locations, listed by New Castle County as
                upcoming Sherrif Sale properties. Our software aggregates data
                collected from the New Castle County publically posted Sherrif
                Sale List. Cut hours from your due diligence process by quickly
                navigating properties on the list, saving hot prospects, and
                exporting the data.
              </p>
              <hr></hr>
            </div>
          </ContentLeft>
          <ContentRight>
            <div className="wordsContainer">
              <h2>Quick Export</h2>
              <p>
                Export summary information quickly in PDF or CSV format, or
                utilize our premium data collection tool. Our interface allows
                you to rapidly assess, collect and export property data on all
                currently listed New Castle County sheriff sale properties.
              </p>
              <hr></hr>
            </div>
            <img
              className="contentImage"
              src="/img/exportIcon.svg"
              alt="Not Found"
            />
          </ContentRight>
          <ContentLeft>
            <img
              className="contentImage"
              src="/img/dataIcon.svg"
              alt="Not Found"
            />
            <div className="wordsContainer">
              <h2>Collect Data</h2>
              <p>
                A premium feature using our unique data parsing and web
                scrubbing techniques to search the internet for all public
                records on your chosen properties. Select properties, run the
                "Collect Info" tool, then export PDF or CSV format data to the
                email address on your account.
              </p>
              <hr></hr>
            </div>
          </ContentLeft>
          <ContentCenter>
            <PriceCard>
              <h3>View Only</h3>
              <div className="pricingHeader">$24 /month </div>
              <button className="signUpButton">Sign Up</button>
            </PriceCard>
            <PriceCard>
              <h3>View, Quick Export</h3>
              <div className="pricingHeader">$60 /month</div>
              <button className="signUpButton">Sign Up</button>
            </PriceCard>
            <PriceCard>
              <h3>Premium Access</h3>
              <div className="pricingHeader">$98 /month</div>
              <button className="signUpButton">Sign Up</button>
            </PriceCard>
            <PriceCard>
              <h3>Premium Access- Discount</h3>
              <div className="pricingHeader">$900 /year</div>
              <button className="signUpButton">Sign Up</button>
            </PriceCard>
          </ContentCenter>
          <DataButton />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
