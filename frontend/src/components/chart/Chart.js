import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as echarts from "echarts";
import axios from "axios";

function Chart({ options }) {
  var myChart = echarts.init(useRef("null"));

  myChart.showLoading();
  useEffect(() => {
    const chart = myChart.current;
    chart.setOption(options);
  }, [options, ResizeObserver]);

  axios.get("http://127.0.0.1:8000/tags/network", function (graph) {
    myChart.hideLoading();
    graph.nodes.forEach(function (node) {
      node.symbolSize = 5;
    });

    return <div ref={myChart} style={{ width: "100%", height: "100%" }}></div>;
  });
  Chart.propTypes = { options: PropTypes.any };
}

export default Chart;
