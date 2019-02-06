import React from 'react';
import PropTypes from "prop-types"
//import './Timer.css';

import Countdown from './Countdown';

class Timer extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Countdown/>			
			</React.Fragment>
		);
	}
}

export default Timer;
