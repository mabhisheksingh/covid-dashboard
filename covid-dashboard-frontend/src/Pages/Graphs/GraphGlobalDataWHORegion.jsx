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
} from "chart.js";

import { Global_DATA } from "../../Utils/StaticData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphGlobalDataWHORegion() {

  const [GlobalDataSets, setGlobalDataSets] = useState([]);

  const fetchData = async () => {
    for (let index = 0; index < Global_DATA.WHO_REGIONList.length; index++) {
      let WHO_REGION = Global_DATA.WHO_REGIONList[index];
      // console.log("v ", WHO_REGION);
      let url =
        import.meta.env.VITE_BASE_URL + Global_DATA.URL_END_POINT + WHO_REGION;
        // console.log("URL ", url);
      let res = await fetch(url)
                    .then((response) => response.json())
                  .then((d) => {
                    const element = d[0];
                    let dataset = {
                      label: element[Global_DATA.WHO_REGION],
                      data: [
                        element._sum["New_cases"],
                        element._sum["Cumulative_cases"],
                        element._sum["New_deaths"],
                        element._sum["Cumulative_deaths"],
                      ],
                      barThickness: 6,
                      maxBarThickness: 10,
                      minBarLength: 2,
                      backgroundColor:
                        Global_DATA.CaseReportColorCode[element[Global_DATA.WHO_REGION]]
                          .color,
                    };
                    return dataset;
                  });
      setGlobalDataSets((prev) => [...prev, res]);            

    }
  };

  useEffect(() => {
    // console.log("Hi");
    setGlobalDataSets([]);
    fetchData(); //6api
  }, [] );

  console.log("GlobalDataSets ", GlobalDataSets);
  const chartData = {
    labels: Global_DATA.CaseReport,
    datasets: GlobalDataSets,
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
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'WHO defined region Bar Chart',
      },
    },
  };

  return (
    <>
      <Bar data={chartData} options={options}  />
    </>
  );
}
