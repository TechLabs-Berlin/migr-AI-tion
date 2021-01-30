import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export default function Chart() {
  const [graph, setGraph] = React.useState({ nodes: [], links: [] });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/tags/network");
    setGraph(response.data);
  }, []);

  let option = {
    tooltip: {},
    series: [
      {
        type: "graph",
        layout: "force",
        data: graph.nodes.map((n) => ({
          ...n,
          symbolSize: n.value * 3,
          itemStyle: { color: getRandomColor() },
        })),
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
  return (
    <ReactEcharts style={{ width: "100%", height: "100vh" }} option={option} />
  );
}
