import Navbar from "./components/navbar";
import Banner from "./components/banner";
import DataButton from "./components/testComp";
import ContentCenter from "./components/centerContent";
import ContentLeft from "./components/contentLeft";
import Footer from "./components/footer";
import "./App.css";

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
          <ContentCenter>
            <img className="contentLogo" src="/logo512.png" alt="Not Found" />
            <img className="contentLogo" src="/img/nccde.png" alt="Not Found" />
          </ContentCenter>
          <ContentLeft>
            <img
              className="contentImage"
              src="/img/IMG_0970.JPG"
              alt="Not Found"
            />
            <div className="wordsContainer">
              <h2>Property Mapping</h2>
              <p>
                Visualize property locations, listed by New Castle County as
                upcoming Sherrif Sale properties.
              </p>
            </div>
          </ContentLeft>
          <DataButton />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
