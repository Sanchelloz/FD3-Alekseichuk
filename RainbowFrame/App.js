"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colorsArr = require("./Colors.json");

const TEXT = 'RainbowFrame';

ReactDOM.render(
	<RainbowFrame colorsArr = {colorsArr}>
		{ TEXT }
  </RainbowFrame> , document.getElementById('container')
);