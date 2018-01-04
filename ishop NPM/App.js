"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import CatalogBlock from './components/CatalogBlock';

let captionText = 'Каталог товаров нашего магазина';
let catalogArr = require('./Catalog.json');

ReactDOM.render( <
    CatalogBlock caption = { captionText }
    catalog = { catalogArr }
    />, document.getElementById('container')
);