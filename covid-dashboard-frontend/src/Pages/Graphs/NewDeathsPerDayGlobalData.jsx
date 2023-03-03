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

import { Global_DATA, Global_PER_DAY_DATA } from "../../Utils/StaticData";
import { getCovid19DataPerDay } from "../../Utils/ApiUtils";



export default function NewDeathsPerDayGlobalData() {


  const [GlobalDataSetsPerDay, setGlobalDataSetsPerDay] = useState([]);
  const [Dates, setDates] = useState([]);
  const [NewDeathCases, setNewDeathCases] = useState([]);

  useEffect(() => {
    getCovid19DataPerDay(setGlobalDataSetsPerDay);
  }, []);


  useEffect( ()=>{
    let dates =  GlobalDataSetsPerDay.map( (val) =>   val[Global_PER_DAY_DATA.DATE_REPORTED]  )  ; 
    setDates(dates);
    let newDeathCases = GlobalDataSetsPerDay.map( val => val._sum[Global_PER_DAY_DATA.DEATH_CASES]  )  ; 
    setNewDeathCases( newDeathCases )
  },[GlobalDataSetsPerDay])
  let dateSet = {
            label: "New_death_Cases",
            data:   NewDeathCases || [0],
            barThickness: 6,
            maxBarThickness: 10,
            minBarLength: 2,
            backgroundColor:Global_PER_DAY_DATA.NewDeathReportColorCode,
  };

  const chartData = {
    labels: Dates,
    datasets: [dateSet],
    options: {
      indexAxis: "x",
      scales: {
        y: {
          beginAtZero: true,
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
        text: "Covid Death Cases World wide",
        position: "bottom",
      },
    },
  };

  return (
    <>
      <Bar data={chartData} options={options} />
    </>
  );
}
