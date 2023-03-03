import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

import {
  Global_DATA,
  Global_PER_DAY_DATA,
  COUNTRY_DATA,
} from "../../Utils/StaticData";
import { getCovid19DataByCountry } from "../../Utils/ApiUtils";

export default function CovidDataByCountryWise() {


  const [CountryCovidData, setCountryCovidData] = useState([]);
  const [Dates, setDates] = useState([]);
  const [NewCases, setNewCases] = useState([]);
  const [CountryCode, setCountryCode] = useState('US');
  const [CurrentCountry, setCurrentCountry] = useState('INDIA');

  const covidData = async ( countryCode , setUseStateVariable) => {

    console.log("countryCode ",countryCode)
    let url =
      import.meta.env.VITE_BASE_URL + COUNTRY_DATA.URL_END_POINT + countryCode;
    console.log(url);
    let res = await fetch(url)
      .then((response) => response.json())
      .then((d) => d);

    console.log("res ", res);
    setUseStateVariable(res);

    /* A callback function that is passed to the function as a parameter. */
  };

  useEffect(() => {
    setIUpdate();
  }, [CountryCovidData])
  const setIUpdate= ()=>{

    setCurrentCountry(CountryCovidData[0]?.Country);
    // setCountryCode(CountryCovidData[0]?.Country_code);
    let dates = CountryCovidData.map((val) => val[COUNTRY_DATA.DATE_REPORTED]);
    setDates(dates);
    let newCases = CountryCovidData.map((val) => val[COUNTRY_DATA.NEW_CASES]);
    setNewCases(newCases);
  }

  useEffect(() => {
    covidData(CountryCode, setCountryCovidData);
  }, []);
  useEffect(() => {
    covidData(CountryCode, setCountryCovidData);
  }, [CountryCode]);

  let dateSet = {
    label: "New_cases",
    data: NewCases || [0],
    barThickness: 6,
    maxBarThickness: 10,
    minBarLength: 2,
    backgroundColor: "rgb(10,113,213)",
  };

  const chartData = {
    labels: Dates,
    datasets: [dateSet],
    options: {
      indexAxis: "x",
      scales: {
        y: {
          beginAtZero: true,
          // stacked: true,
        },
      },
    },
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: CurrentCountry + " Situation",
        position: "bottom",
      },
    },
  };

  const handleSelectChange = (e) => {
    console.log( e.target.value)
    setCountryCode(e.target.value )
  };

  return (
    <div style={{ width: 500}}>
      <label htmlFor="country" >select country:</label>
      <select name="country" id="country" onChange={handleSelectChange}>
        <option value="US">United States of America</option>
        <option value="IN">India</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="PK">Pakistan</option>
        <option value="CN">China, People's Republic of</option>
        <option value="JP">Japan</option>
      </select>
      <Bar data={chartData} options={options} />
    </div>
  );
}
