import React from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

function Chart() {
  const [graph, setGraph] = React.useState({ nodes: [], links: [] });

  let getData = () => {
    axios
      .get("http://127.0.0.1:8000/tags/network")
      .then((response) => setGraph(response.data));
  };

  getData();

  let option = {
    tooltip: {},
    series: [
      {
        name: "Les Miserables",
        type: "graph",
        layout: "force",
        data: graph.nodes,
        links: graph.links,
        roam: true,
        label: {
          position: "right",
        },
        force: {
          repulsion: 100,
        },
      },
    ],
  };
  return <ReactEcharts option={option} />;
}

export default Chart;
