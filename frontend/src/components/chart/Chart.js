import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import axios from "axios";

function Chart({ option }) {
  var myChart = echarts.init(useRef(null));
  var chart = myChart.current;

  myChart.showLoading();

  useEffect(() => {
    chart.setOption(option);
  }, [option, chart]);

  axios.get("http://127.0.0.1:8000/tags/network").then((graph) => {
    myChart.hideLoading();
    graph.nodes.forEach((node) => {
      node.symbolSize = 5;
    });

    return (
      <ReactEcharts
        ref={myChart}
        style={{
          width: "100%",
          height: "100%",
        }}
        option={{
          title: {
            text: "Les Miserables",
            subtext: "Default layout",
            top: "bottom",
            left: "right",
          },
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
        }}
      />
    );
  });
}

Chart.propTypes = { option: PropTypes.any };

export default Chart;
