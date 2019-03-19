import React from "react"
import PropTypes from "prop-types"

import Chartify from 'chartify'; // For displaying data
import Chart from "react-apexcharts";

import "../../assets/stylesheets/chart.scss"

class DisplayTime extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      options: {
	        chart: {
	          id: "basic-bar"
	        },
	        xaxis: {
	          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
	        }
	      },
	      series: [
	        {
	          name: "series-1",
	          data: [30, 40, 45, 50, 49, 60, 70, 91]
	        }
	      ]
	    };
  	}

  	render () {

  		// Data prop is a dataset that should be an array of objects:
  		let data = [{
	    		x_value: '20.11.2016', // This will be our date value
	    		y_value: 5,			   // This will be our total hours value
	    		title: 'Hours'
    		},
    		{
	    		x_value: '20.9.2016',
	    		y_value: 2,
	    		title: 'Hours'
			},
			{
	    		x_value: 'Nov',
	    		y_value: 3,
	    		title: 'Hours'
			},
			{
	    		x_value: '20.11.2016',
	    		y_value: 8,
	    		title: 'Hours'
			},
			{
	    		x_value: '20.11.2016',
	    		y_value: 1,
	    		title: 'Hours'
			}
		];

		let config = {
		    theme: 'blue',
		    width: 50,			      
		    height: 10,		
		    box_size: 20,
		    box_radius: 8,
		    line: false,
		    line_only: false,
		    bordered: false
		};


	    return (
	        <React.Fragment>
	        	<div className="chart-container">
			      	<h2>{this.props.value}</h2>
			      	<Chartify 
	    				data={data} 
	    				container="times-container" 
	    				config={config} 
					/>
				</div>

				<Chart
	              	options={this.state.options}
	              	series={this.state.series}
	              	type="bar"
	              	width="500"
            	/>
	      </React.Fragment>
	    );
  }
}

export default DisplayTime;