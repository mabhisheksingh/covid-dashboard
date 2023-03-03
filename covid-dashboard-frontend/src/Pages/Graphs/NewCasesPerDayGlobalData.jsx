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

import { Global_PER_DAY_DATA } from "../../Utils/StaticData";
import { getCovid19DataPerDay } from "../../Utils/ApiUtils";



export default function NewCasesPerDayGlobalData() {


  const [GlobalDataSetsPerDay, setGlobalDataSetsPerDay] = useState([]);
  const [Dates, setDates] = useState([]);
  const [NewCases, setNewCases] = useState([]);

  useEffect(() => {
    getCovid19DataPerDay(setGlobalDataSetsPerDay);
  }, []);


  useEffect( ()=>{
    let dates =  GlobalDataSetsPerDay.map( (val) =>   val[Global_PER_DAY_DATA.DATE_REPORTED] )  ; 
    setDates(dates);
    let newCases = GlobalDataSetsPerDay.map( val =>    val._sum[Global_PER_DAY_DATA.NEW_CASES]  )  ; 
    setNewCases( newCases )
  },[GlobalDataSetsPerDay])

  // console.log("GlobalDataSetsPerDay : ",  GlobalDataSetsPerDay  );
  // console.log("newCase : ",  NewCases  );
  // console.log("dates : ",  Dates  );

  let dateSet = {
            label: "New_cases",
            data:   NewCases || [0],
            barThickness: 6,
            maxBarThickness: 10,
            minBarLength: 2,
            backgroundColor: Global_PER_DAY_DATA.NewCaseReportColorCode,
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
        text: "Covid New cases World wide",
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
