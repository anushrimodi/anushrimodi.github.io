
// Global objects go here (outside of any functions)

let data, scatterplot, barchart;

const dispatcher = d3.dispatch('filterCategories');
//let difficultyFilter = []; // NEW: global filter array
/**
 * Load data from CSV file asynchronously and render charts
 */
 
d3.csv('data/vancouver_trails.csv')
   .then(_data => {
     data = _data; // for safety, so that we use a local copy of data.

     // ... data preprocessing etc. ... TODO: you add code here for numeric
     // Be sure to examine your data to fully understand the code

     data.forEach(d => {
        d.length = +d.length;
        d.elevation_gain = +d.elevation_gain;
      });

     // Initialize scale
     const colorScale = d3.scaleOrdinal()
     .domain(['easy', 'intermediate', 'difficult'])
     .range(['#41ab5d', '#c7e9c0', '#005a32']); 
     
     // TODO: add an ordinal scale for the difficulty
     // See Lab 4 for help

     scatterplot = new Scatterplot({
        parentElement: '#scatterplot',
        colorScale: colorScale
      }, data);
  
      barchart = new Barchart({
        parentElement: '#barchart',
        colorScale: colorScale
      }, data, dispatcher);
  
      scatterplot.updateVis();
      barchart.updateVis();


/**
 * Use bar chart as filter and update scatter plot accordingly


function filterData() {
    if (difficultyFilter.length == 0) {
          scatterplot.data = data;
     } else {
           scatterplot.data = data.filter(d =>
difficultyFilter.includes(d.difficulty));
     }
     scatterplot.updateVis();
}
     */

dispatcher.on('filterCategories', selectedCategories => {
    if (selectedCategories.length == 0) {
        scatterplot.data = data;
    } else {
        scatterplot.data = data.filter(d => selectedCategories.includes(d.difficulty));
    }
    scatterplot.updateVis();
    });
})
.catch(error => console.error(error));

