import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

export default function Graph() {
  const chartData= {
    labels:["A","B"],
    datasets:[
      {
        label: "BB",
        data:[10,20],
        borderWidth: 1,
      },
      {
        label: "B1B",
        data:[20,30],
        borderWidth: 1,
      }
    ]
  };

  return (
    <>
      <Bar
        data={chartData}
      />
      <div>G1</div>
    </>
  );
}
