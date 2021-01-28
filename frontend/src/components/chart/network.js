export default {
  option: {
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
        categories: graph.categories,
        roam: true,
        label: {
          position: "right",
        },
        force: {
          repulsion: 100,
        },
      },
    ],
  },
};
