const COLORS = {
  GRAPH_01: '#4fadf7',
  GRAPH_02: '#85da47',
  GREY_50: '#EDEFF1',
};

export const properties = {
  chart: {
    domainPadding: { x: 80, y: 30 },
    height: 500,
    width: 960,
  },
  yAxis: {
    tickCount: 7,
    style: {
      axis: { strokeWidth: 0.5, fill: 'black' },
      tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
      ticks: { stroke: COLORS.GREY_50, size: 0 },
    },
  },
  xAxis1: {
    tickValues: [0.25, 0.5, 0.75, 1],
    style: {
      axis: { stroke: 'transparent' },
      tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
      ticks: { stroke: COLORS.GREY_50, size: 0 },
      grid: { stroke: COLORS.GREY_50 },
    },
  },
  xAxis2: {
    tickValues: [0.25, 0.5, 0.75, 1],
    style: {
      axis: { stroke: 'transparent' },
      tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
      ticks: { stroke: COLORS.GREY_50, size: 0 },
      grid: { stroke: COLORS.GREY_50 },
    },
  },
  line1: {
    style: {
      data: {
        stroke: COLORS.GRAPH_01,
      },
      labels: { fontSize: 10 },
    },
    // animate: { duration: 2000, onLoad: { duration: 1000 } },
  },
  line2: {
    style: {
      data: {
        stroke: COLORS.GRAPH_02,
      },
      labels: { fontSize: 10 },
    },
    // animate: { duration: 2000, onLoad: { duration: 1000 } },
  },
  tooltip: {
    cornerRadius: 5,
    pointerLength: 5,
    flyoutStyle: { fill: '#3A474E', stroke: '#3A474E' },
    style: { fontSize: 10, fill: '#FFFFFF' },
    dy: 0,
    centerOffset: { x: 25 },
  },
  label: {
    dy: 5,
    dx: 8,
  },
};
