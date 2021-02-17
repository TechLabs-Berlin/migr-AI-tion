import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export default function Chart() {
  const [graph, setGraph] = React.useState({ nodes: [], links: [] });

  function getRandomColor() {
    var value = (Math.random() * 0xff) | 0;
    var grayscale = (value << 16) | (value << 8) | value;
    var color = "#" + grayscale.toString(16);
    return color;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://app.migr-ai-tion.net/api/tags/network"
      );
      setGraph(response.data);
    }
    fetchData();
  }, []);

  let option = {
    tooltip: {
      alwaysShowContent: true
    },
    series: [
      {
        type: "graph",
        layout: "force",
        data: graph.nodes.map(n => ({
          ...n,
          symbolSize: n.value * 3,
          itemStyle: { color: getRandomColor() }
        })),
        links: graph.links.map(l => ({
          ...l,
          lineStyle: { color: "#24e1ea" }
        })),
        roam: true,
        label: {
          position: "right"
        },
        force: {
          repulsion: 100
        }
      }
    ]
  };
  return (
    <ReactEcharts style={{ width: "100%", height: "100vh" }} option={option} />
  );
}
