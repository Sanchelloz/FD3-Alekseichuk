﻿import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/CatalogBlock.css';
import ItemBlock from './ItemBlock';

//let captionText = 'Каталог товаров нашего магазина';

class CatalogBlock extends React.Component {

  static propTypes = {
    caption: PropTypes.string.isRequired,
    ModalWorkMode: PropTypes.number.isRequired,
    selectedRowCode: PropTypes.number.isRequired,
    catalog: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            URL: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            residue: PropTypes.number.isRequired,
        })
    ),
  };
  state = {
    selectedRowCode: null,
    ModalWorkMode: 0,
  }

    render() {

      var catalogCode = this.props.catalog.map(v =>
        <ItemBlock key={v.code}
          name={v.name} URL={v.URL}
          code={v.code} price={v.price}
          residue={v.residue}
          caption={this.props.caption}
        />
      );

    return (
    <div className='CatalogBlock'>
      <div className='Caption'> {this.props.caption} </div>
      <div className='Catalog'>
        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Фото</th>
              <th>Код товара</th>
              <th>Цена, руб</th>
              <th>Остаток на складе</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{catalogCode}</tbody>
        </table>
      </div>
      <div className='NewBtn'>
        <button>Добавить товар</button>
      </div>
    </div>
    );
  }
}

export default CatalogBlock;