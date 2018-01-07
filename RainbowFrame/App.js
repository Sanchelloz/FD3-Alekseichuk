"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colorsArr = require("./Colors.json");

const TEXT = 'RainbowFrame';

ReactDOM.render(
	<RainbowFrame
		text = { TEXT }
    colorsArr = { colorsArr }
    />, document.getElementById('container')
);