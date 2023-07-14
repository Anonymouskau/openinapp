import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Guest", "User"],
  ["Week 1", 1000, 400],
  ["Week 2", 1170, 460],
  ["Week 3", 660, 1120],
  ["Week 4", 1030, 540],
];

export const options = {
  title: "Activities",
  curveType: "function",
  legend: { position: "bottom" },
};

export function GoogleChart() {
    
    useEffect(()=>{



    })
  return (
    <Chart
      chartType="LineChart"
      legendToggle={true}
      className="centered-div"
      data={data}
      options={options}
    />
  );
}
