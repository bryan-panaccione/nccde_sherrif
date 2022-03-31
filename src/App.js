import Navbar from "./components/navbar";
import Banner from "./components/banner";
import DataButton from "./components/testComp";
import Dashcard from "./components/dashcard";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <header id="header" className="App-header">
          <Navbar />
        </header>
        <div>
          <Banner />
          <DataButton />
          <Dashcard />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          targent="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
