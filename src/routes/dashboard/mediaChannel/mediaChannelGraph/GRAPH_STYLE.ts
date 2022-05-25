const GRAPH_STYLE = {
  chart: {
    width: 800,
    height: 400,
  },
  animate: {
    duration: 1000,
    onLoad: { duration: 500 },
  },
  top: {
    barWidth: 20,
    x: 'category',
    y: 'value',
    cornerRadius: { top: 5 },
    style: { labels: { fill: '#FFFFFF' } },
  },
  bottom: {
    barWidth: 20,
    x: 'category',
    y: 'value',
    style: { labels: { fill: '#FFFFFF' } },
  },
  tooltip: {
    cornerRadius: 5,
    pointerLength: 5,
    flyoutStyle: { fill: '#3A474E', stroke: '#3A474E' },
    style: { fontSize: 10, fill: '#FFFFFF' },
  },
  dependentAxis: {
    axis: { stroke: 'transparent' },
    ticks: { stroke: 'transparent' },
    grid: { stroke: '#EDEFF1' },
    tickLabels: { fontSize: 10, padding: 10, fill: '#94A2AD' },
  },
  axis: {
    axis: { stroke: '#EDEFF1' },
    tickLabels: { fontSize: 10, padding: 10, fill: '#94A2AD' },
  },
  legend: {
    x: 500,
    y: 380,
    gutter: 40,
    style: { border: { stroke: 'none' }, labels: { fontSize: 10, fill: '#94A2AD' } },
    colorScale: ['#FFEB00', '#4FADF7', '#85DA47', '#AC8AF8'],
    data: [{ name: '카카오' }, { name: '페이스북' }, { name: '네이버' }, { name: '구글' }],
  },
};

export default GRAPH_STYLE;
