import React from "react";
import Chart from "../components/chart/Chart";
import network from "../components/chart/network";

export default function Home() {
  return (
    <div>
      <Chart options={network} />
    </div>
  );
}
