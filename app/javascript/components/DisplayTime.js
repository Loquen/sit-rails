import React from "react"
import PropTypes from "prop-types"

class DisplayTime extends React.Component {
	constructor(props) {
    	super(props);

    }

  	render () {
	    return (
	        <React.Fragment>
		      	<h2>{this.props.value}</h2>
	      </React.Fragment>
	    );
  }
}

export default DisplayTime;