import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ModalWindow.css';

class ModalWindow extends React.Component {

  static propTypes = {
  	WorkMode: PropTypes.number.isRequired, //"0" - окно закрыто,
  									//"1" - режим просмотра, "2" - режим редактирования
    catalog: PropTypes.arrayOf(					
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        URL: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        residue: PropTypes.number.isRequired,
        selected: PropTypes.boolean,
      })
    ),
  };

  state = {
    newName: string,
    newURL: 0,
    newCode: 0,
    newPrice: 0,
    newResidue: 0
  };
  render() {
    return (
    	if (WorkMode == 1) {
  			<div className='Product_modal'>
  			  <div className='Product_name_modal'>{this.props.name}</div>
  			  <div className='Product_foto_modal'>
  			    <img src={this.props.URL}/>
  			  </div>
  			  <div className='Product_count_modal'>{this.props.code}</div>
  			  <div className='Product_price_modal'>{this.props.price + ' руб'}</div>
  			  <div className='Product_residue_modal'>{this.props.residue}</div>
  			</div>
     	} else if (WorkMode == 2) {
       	<div className='Product_modal'>
     	    <input type='text' defaultValue={this.props.name}/>
      	  <input type='text' defaultValue={this.props.URL}/>
      	  <input type='text' defaultValue={this.props.code}/>
      	  <input type='text' defaultValue={this.props.price}/>
          <input type='text' defaultValue={this.props.residue}/>
      	  
      	  <div className='Save_position'>
      	  	<button>Сохранить</button>
      	  </div>
      	</div>
      }
    );
  }
};

export default ItemBlock;
