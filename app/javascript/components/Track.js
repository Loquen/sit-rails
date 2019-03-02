import React from "react"
import PropTypes from "prop-types"

import DisplayTime from './DisplayTime';

class Track extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {value: 'Week'};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
    	console.log(this.state.value);
    	event.preventDefault();
  	}

  	render () {
	    return (
	        <React.Fragment>
		      	<h2>Track</h2>
		      	<p>Here is your personal meditation data</p>
					<div>Pick your timeframe:
			            <select value={this.state.value} onChange={this.handleChange}>
			            	<option value="Week">Week</option>
							<option value="Month">Month</option>
							<option value="Year">Year</option>
			            </select>
		            </div>
			        
		      	<DisplayTime value={this.state.value}/>
	        </React.Fragment>
	    );
  }
}

export default Track;
