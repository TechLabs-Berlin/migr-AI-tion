import React from "react";
import Chart from "../components/chart/Chart";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <br />
      <span className="chart-description">
        <i>
          Tags uploaded by users about "migration" currently in our database{" "}
        </i>
      </span>
      <Chart />
    </div>
  );
}
