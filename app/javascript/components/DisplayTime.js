import React from "react"
import PropTypes from "prop-types"

//import Chartify from 'chartify'; // For displaying data
import Chart from "react-apexcharts";

import "../../assets/stylesheets/chart.scss"

class DisplayTime extends React.Component {

	constructor(props) {
	    super(props);

	    /*this.state = {
	      period: this.props.value,
	      options: {
	        chart: {
	          id: "basic-bar"
	        },
	        xaxis: {
	          categories: period
	        }
	      },
	      series: [
	        {
	          name: "series-1",
	          data: data
	        }
	      ]
	    };*/
  	}

  	render () {
  		let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	    let month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]; // we will just loop over 1 to n when displaying
	    let year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	    let testDataWeek = [10, 13, 4, 23, 3, 8, 19];
	    let testDataMonth = [10, 13, 6, 5, 7, 8, 39, 24, 23, 3, 8, 19,10, 13, 9, 5, 7, 8, 39, 24, 23, 3, 8, 19,10, 13, 5, 5, 7, 8, 39];
	    let testDataYear = [10, 13, 3, 5, 7, 8, 39, 24, 23, 3, 8, 19];

  		let period = week;
	    let data = testDataWeek;
  		
  		if(this.props.value === 'Month'){
  			period = month;
	    	data = testDataMonth;
  		}else if(this.props.value === 'Year'){
  			period = year;
	    	data = testDataYear;
  		}

  		let options =  {
	        chart: {
	          id: "basic-bar"
	        },
	        xaxis: {
	          categories: period
	        }
	      };
	    let series =  [
	        {
	          name: "series-1",
	          data: data
	        }
	      ]
	    return (
	        <React.Fragment>
	        	<div className="chart-container">
			      	<h2>{this.props.value}</h2>
					<Chart
		              	options={options}
		              	series={series}
		              	type="bar"
		              	width="500"
	            	/>
            	</div>
	      </React.Fragment>
	    );
  }
}

export default DisplayTime;