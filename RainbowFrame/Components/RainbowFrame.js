import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/RainbowFrame.css';


class RainbowFrame extends React.Component {
  static propTypes = {
    colorsArr: PropTypes.array.isRequired,
  };

  render() {
  	let colors = this.props.colorsArr

  	for (let i=0; i<colors.length; i++){
  		<div className = {'border_frame border_' + ( colors[i] )}></div>
  	}

  }
}

export default RainbowFrame;
