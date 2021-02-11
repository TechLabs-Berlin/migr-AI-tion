import React from "react";
import Chart from "../components/chart/Chart";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <br />
      <h4 className="chart-description">
        <i>Your tags about "migration" :</i>
      </h4>
      <Chart />
    </div>
  );
}
