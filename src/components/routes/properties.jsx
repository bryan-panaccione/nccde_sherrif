import Navbar from "../navbar";
import Banner from "../banner";
import Mapcard from "../mapCard";
import PropertyView from "../propViewCard";
import FilterCard from "../filterPropsCard";
import ExportCard from "../exportCard";
import PropertyTable from "../propertyTable";
import Footer from "../footer";

function Property_Page() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar id="propPageNav" />
        </header>
        <div>
          <Banner
            id="propPageBanner"
            title="Property Search"
            tagLine="New Castle County"
          />
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
