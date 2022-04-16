import Navbar from "./components/navbar";
import Banner from "./components/banner";
import DataButton from "./components/testComp";
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
          <ContentLeft />
          <DataButton />
          <div className="container"></div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
