import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ItemBlock.css';

//let captionText = 'Каталог товаров нашего магазина';

class ItemBlock extends React.Component {

    static propTypes = {
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

    render() {
    return (

    <div className='Product'>
      <div className='Product_name'>{this.props.name}</div>
      <div className='Product_foto'>
        <img src={this.props.URL}/>
      </div>
      <div className='Product_count'>{this.props.code}</div>
      <div className='Product_price'>{this.props.price + ' руб'}</div>
      <div className='Product_residue'>{this.props.residue}</div>
    </div>
    );
  }
};

export default ItemBlock;