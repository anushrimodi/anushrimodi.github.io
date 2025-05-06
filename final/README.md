# Video Game Sales 1980-2020

## An interactive multiform data visualization showing distribution of video game sales regarding various benchmarks from 1980 to 2020

## 1. What does it do?
This is a data visualization that we (Anushri Modi and Ryan Wu) made for our final project in CSC 362 Data Visualization, Spring 2025 at Davidson College. We adopted an online dataset from Kaggle called [Video Game Sales](https://www.kaggle.com/datasets/anandshaw2001/video-game-sales) and used most of the data from there. Our visualization (viz) shows the information from the dataset in an engaging and interactive way, aiming to expand our users' understanding of not only this dataset but also the video-game-sale-related knowledge. There are essentially two types of charts in the viz, a scatter plot ![scatter plot](images/scatterplot-screenshot.png) as default and a bar chart, ![bar chart](images/barchart-screenshot.png) based on how the user manipulates the different buttons on the viz. 

## 2. More about the dataset
As we mentioned above, we used *most* of the data from the dataset. You might be wondering why we didn't use the whole thing? Well, there are many N/A data points included in the original dataset, whether it is about the publisher or the sales data. Since we have around 16000 data points in total, and about 300 of them are aggregated data points that contain N/A, meaning that less than 2% of the data is not useable, we just decided to neglect them. Fortunately, that is the only data processing task we did for the whole dataset.

## 3. Acknowledgement & references
We would like to thank Dr. Katy Williams for her support in the class to facilitate our work. We also want to thank Srijit Banerjee '26, Jack Schwanewede '26, Wesley Smail '26 and Akanksha Velath '26 for participating in our piloting and user testing process. Their involvement helps us to debug and re-evaluate our work significantly for the sake of betterment. 
During our work, we also used resources online attached below:
- Vincent Navetat's [Medium blog post](https://medium.com/carwow-product-engineering/building-a-simple-tooltip-component-that-never-goes-off-screen-c7039dcab5f9) on building a visible tooltip based on the screen space.
- The [GeeksforGeeks post](https://www.geeksforgeeks.org/how-to-create-dictionary-and-add-key-value-pairs-dynamically/) on how to use dynamic key-value pairs to process limited data more efficiently at proximal locality.
- The accessbility check-in provided by [Chartibility](https://chartability.github.io/POUR-CAF/).
- An easy-to-use package for creating tutorial of website, [Intro.js](https://introjs.com/docs).
- An [D3 tutorial](https://d3-graph-gallery.com/graph/interactivity_tooltip.html) for making tooltip in various ways.
- The [WAVE](https://wave.webaim.org/extension/) add-on that facilitates our self-check-in with accessibility features.
- The [D3 annotation tool](https://d3-annotation.susielu.com/) designed by Susie Lu. 
