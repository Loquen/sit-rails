import React from "react"
import PropTypes from "prop-types"

import Chartify from 'chartify'; // For displaying data

class DisplayTime extends React.Component {
	constructor(props) {
    	super(props);

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
		      	<h2>{this.props.value}</h2>
		      	<Chartify 
    				data={data} 
    				container="films-container" 
    				config={config} 
				/>
	      </React.Fragment>
	    );
  }
}

export default DisplayTime;