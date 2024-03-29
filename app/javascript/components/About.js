import React from "react"
import PropTypes from "prop-types"

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<h2>About This Site</h2>
		<p>This is an app I made to track the hours you spend meditating. To use this site simply begin timing your meditations. After you finish your time will be recorded. You can then see a graph of your daily, weekly, monthly and yearly hours.</p>
      </React.Fragment>
    );
  }
}

export default About
