// Global objects go here (outside of any functions)
let data, scatterplot, barchart;
/**
 * Load data from CSV file asynchronously and render charts
 */

d3.csv("data/video-game-sales.csv")
  .then(_data => {
    data = _data; // for safety, so that we use a local copy of data.

    data.forEach(d => {
      d.Global_Sales = +d.Global_Sales;
      d.NA_Sales     = +d.NA_Sales;
      d.EU_Sales     = +d.EU_Sales;
      d.JP_Sales     = +d.JP_Sales;
      d.Other_Sales  = +d.Other_Sales;
      d.Year         = +d.Year;          
    });

    

    drawVis();

    d3.selectAll("select").on("change", drawVis);
  })
  .catch(error => console.error("Data loading error:", error));


function drawVis() {
  //our dropdown options
  const xAttr       = d3.select("#x-axis-select").property("value");
  const yAttr       = d3.select("#y-axis-select").property("value");
  const aggregation = d3.select("#aggregation-select").property("value");
  const sortOrder   = d3.select("#sort-select").property("value");
  
  d3.select("#chart-area").html("");
  d3.select("#chart-area")
    .append("svg")
      .attr("id", "chart-svg");

  const maxY = d3.max(data, d => d[yAttr]);
  const colorScale = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, maxY]);

    let chartType;

  //if the user selects these dropdowns, we create a barchart else a scatterplot
  if (["Genre","Platform","Publisher"].includes(xAttr)) {   
    barchart = new Barchart(
      { parentElement: "#chart-area", colorScale },
      data, xAttr, yAttr
    );
    barchart.updateVis(aggregation, sortOrder);
    chartType = "bar chart";
  } else {
    // scatter: show top 30 games by chosen Y
    // const top30 = data.slice()
    //   .sort((a,b) => d3.descending(a[yAttr], b[yAttr]))
    //   .slice(0, 30);
    scatterplot = new Scatterplot(
      { parentElement: "#chart-area", colorScale },
      data
    );
    scatterplot.updateVis(yAttr, aggregation);
    chartType = "scatterplot";
  }
updateChartSummary(xAttr, yAttr,chartType );
}

function updateChartSummary(xAttr, yAttr,chartType) {
  const xLabelMap = {
    "Publisher": "top video game publishers",
    "Genre": "game genres such as Action, Sports, or Puzzle",
    "Platform": "gaming platforms like PlayStation and Xbox",
    "Year": "video game releases from 1980 to 2020"
  };

  const yLabelMap = {
    "Global_Sales": "worldwide sales",
    "NA_Sales": "North American market",
    "EU_Sales": "European market",
    "JP_Sales": "Japanese market",
    "Other_Sales": "other global regions"
  };

  const xPhrase = xLabelMap[xAttr] || "selected category";
  const yPhrase = yLabelMap[yAttr] || "selected metric";

  const summaryText = `This ${chartType} shows ${xPhrase} compared across ${yPhrase}, helping you explore patterns and trends in the video game industry.`;

  document.getElementById("chart-summary").textContent = summaryText;
}

