import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/RainbowFrame.css';


class RainbowFrame extends React.Component {
  static propTypes = {
    colorsArr: PropTypes.array.isRequired,
  };

  render() {
  	let colorsArr = this.props.colorsArr;

  	for (let i=0; i<colorsArr.length; i++){
  		<div className = {'border_frame border_' + ( colorsArr[i] )}>{this.props.children}</div>
  	};

	return this.props.children

  }
}

export default RainbowFrame;
