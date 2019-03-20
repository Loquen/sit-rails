import React from "react"
import PropTypes from "prop-types"

import DisplayTime from './DisplayTime';

import "../../assets/stylesheets/tracker.scss"

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
  		let data = this.props.week

  		if(this.state.value === 'Month'){
  			data = this.props.month
  		}
	    return (
	        <React.Fragment>
	        	<div className="container">
	        		<div className="row">
				      	<h3 className="headline">Here is {this.props.email}'s personal meditation data</h3>
				      	
						<div className="selector">Pick your timeframe:
				            <select value={this.state.value} onChange={this.handleChange}>
				            	<option value="Week">Week</option>
								<option value="Month">Month</option>
								<option value="Year">Year</option>
				            </select>
			            </div>
		            </div>				    
			      	<DisplayTime value={this.state.value} data={data}/>
		      	</div>
	        </React.Fragment>
	    );
  }
}

export default Track;
