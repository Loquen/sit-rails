import React from "react"
import PropTypes from "prop-types"

class Timer extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Timer.propTypes = {
  greeting: PropTypes.string
};
export default Timer
