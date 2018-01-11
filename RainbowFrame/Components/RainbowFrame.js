import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/RainbowFrame.css';


class RainbowFrame extends React.Component {
  static propTypes = {
    colorsArr: PropTypes.array.isRequired,
  };

  render() {
  	let colorsArr = this.props.colorsArr;
	  let child = this.props.children;

	  for (let i=0; i<colorsArr.length; i++){
	  	child = <div className = {'border_frame border_' + ( colorsArr[i] )}>{child}</div>
	  }

	return (child);

  };
}

export default RainbowFrame;
