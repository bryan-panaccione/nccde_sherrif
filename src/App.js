import Navbar from "./components/navbar";
import Banner from "./components/banner";
import FilterCard from "./components/filterPropsCard";
import ExportCard from "./components/exportCard";
import PropertyView from "./components/propViewCard";
import Mapcard from "./components/mapCard";
import PropertyTable from "./components/propertyTable";
import DataButton from "./components/testComp";
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
          <DataButton />
          <div className="container"></div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
