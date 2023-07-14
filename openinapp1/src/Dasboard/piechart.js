import React from "react";
import { Chart } from "react-google-charts";
import './react_googlchart.css'
export const data = [
  ["Basic Tees", "Custom Short Pants"],
  ["Basic Tees", 5.05],
  ["Custom Short Pants", 4],
  ["Super Hoodies", 1.5],
  
];

export const options = {
  title: "Top Products",
};

export function Piechart() {
  return (
    <Chart
      className="centered-div2"
      chartType="PieChart"
      data={data}
      options={options}
      width={"50%"}
      height={"250px"}
    />
    
  );
}
