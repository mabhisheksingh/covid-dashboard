import "./App.css";
import GraphGlobalDataWHORegion from "./Pages/Graphs/GraphGlobalDataWHORegion";
import NewCasesPerDayGlobalData from "./Pages/Graphs/NewCasesPerDayGlobalData";
import NewDeathsPerDayGlobalData from "./Pages/Graphs/NewDeathsPerDayGlobalData";
import CovidDataByCountryWise from "./Pages/Graphs/CovidDataByCountryWise";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <NewCasesPerDayGlobalData />
        </div>
        <div className="grid-item">
          <GraphGlobalDataWHORegion />
        </div>
        <div className="grid-item">
          <NewDeathsPerDayGlobalData />
        </div>
        <div className="grid-item">
          <CovidDataByCountryWise />
        </div>
      </div>
      {/* <div style={{width:700 }} > <GraphGlobalDataWHORegion /></div> */}
      {/* <div style={{width:1000 }} > <NewCasesPerDayGlobalData /></div> */}
      {/* <div style={{width:1000 }} > <NewDeathsPerDayGlobalData /></div> */}
      {/* <div style={{width: 5000, height:1000 }} > <CovidDataByCountryWise /></div> */}
    </>
  );
}

export default App;
