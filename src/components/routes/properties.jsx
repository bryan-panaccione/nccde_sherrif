import Navbar from "../navbar";
import DataButton from "../testComp";
import Banner from "../banner";
import Mapcard from "../mapCard";
import PropertyView from "../propViewCard";
import FilterCard from "../filterPropsCard";
import ExportCard from "../exportCard";
import PropertyTable from "../propertyTable";
import Footer from "../footer";
import ContentLeft from "../contentLeft";
import Dashcard from "../dashcard";
import { BrowserRouter } from "react-router-dom";

function Property_Page() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar />
        </header>
        <div>
          <Banner title="Property Search" tagLine="New Castle County" />
          <DataButton />
          <div className="container">
            <div className="row homeGrid">
              <Mapcard />
              <PropertyView />
              <FilterCard />
              <ExportCard />
            </div>
          </div>
          <PropertyTable />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Property_Page;
