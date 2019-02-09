import React from "react"
import PropTypes from "prop-types"

class SetTime extends React.Component {
  constructor(props) {
	    super(props);
	    this.state = {
	    	hour: 1,
	    	minute: 0,
	    	second: 0,
	    	totalSeconds: 0
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.calculateTotalSeconds = this.calculateTotalSeconds.bind(this);
	}

	// Calculates the total number of seconds the user has inputed
	calculateTotalSeconds() {
		// define total as the seconds plus the minutes*60 plus the hours*3600
		let total = Number(this.state.second) + Number(this.state.minute * 60) + Number(this.state.hour * 3600);

		/*this.setState({ totalSeconds: total }, () => {
			console.log(this.state.totalSeconds);
		});*/

		return total;
	}

	handleChange(event) {
	    const target = event.target;
    	const value = target.value;
    	const name = target.name;

    	if(value >= 0) {
	    	this.setState({
	      		[name]: value
	    	});
		} else {
			alert("Value cannot be negative");
		}
	}

    handleSubmit(event) {
	    console.log('A time was submitted: ' + this.state.hour + ':'+ this.state.minute + ':' + this.state.second);
	    
	    let seconds = this.calculateTotalSeconds();

	    this.props.setTimeInParent(seconds);
	    event.preventDefault();
	}

	render () {
	return (
	  <React.Fragment>
	        <form className="setForm container" onSubmit={this.handleSubmit}>
	        	<div className="form-group row">
	        		<span className="col-md-3"></span>
	        		<label className="col-md-2 text-center">Hours:</label>
	          		<input className="col-md-4 col-sm-12" name="hour" type="number" value={this.state.hour} onChange={this.handleChange} /> 
	        		<span className="col-md-3"></span>
	        	</div>
	        	<div className="form-group row">
	        		<span className="col-md-3"></span>
	        		<label className="col-md-2 text-center">Minutes:</label>
	          		<input className="col-md-4 col-sm-12" name="minute" type="number" value={this.state.minute} onChange={this.handleChange} /> 
	        		<span className="col-md-3"></span>
	        	</div>
	        	<div className="form-group row">
	        		<span className="col-md-3"></span>
	        		<label className="col-md-2 text-center">Seoncds:</label>
	          		<input className="col-md-4 col-sm-12" name="second" type="number" value={this.state.second} onChange={this.handleChange} /> 
	        		<span className="col-md-3"></span>
	        	</div>
	        	<div className="form-group row">
	        		<span className="col-md-5 col-xs-3"></span>
	        		<input className="btn btn-light col-md-2 col-xs-6" type="submit" value="Set Time" />
	        		<span className="col-md-5 col-xs-3"></span>
	        	</div>
	        </form>
	  </React.Fragment>
	);
	}
}

export default SetTime
