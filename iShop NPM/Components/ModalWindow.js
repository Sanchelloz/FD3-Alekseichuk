import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ModalWindow.css';

class ModalWindow extends React.Component {

  static propTypes = {
    WorkMode: PropTypes.number, //"0" - окно закрыто,
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

/*  state = {
    newName: string,
    newURL: 0,
    newCode: 0,
    newPrice: 0,
    newResidue: 0
  };*/
  render() {
    return (
    	<form>
        <label for="Product_name" class="Divlabel"> Наименование товара: </label>
        <input type="text" class="Product_name" placeholder = 'Наименование' defaultValue = { this.props.name }
        onBlur="isValidateName(value)"/>
        <span class="ValidText"></span>
        <br/>

        <label for="Product_foto" class="Divlabel"> Наименование товара: </label>
        <input type="text" class="Product_foto" placeholder = 'URL ссылка на фото' defaultValue = { this.props.URL }
        onBlur="isValidateName(value)"/>
        <span class="ValidURL"></span>
        <br/>

        <label for="Product_count" class="Divlabel"> Код товара: </label>
        <input type="text" class="Product_count" placeholder = 'Код товара' defaultValue = { this.props.code }
        onblur="isValidateNumbert(value)"/>
        <span id="ValidNumber"></span>
        <br/>

        <label for="Product_price" class="Divlabel"> Код товара: </label>
        <input type="text" class="Product_price" placeholder = 'Цена' defaultValue = { this.props.price + ' руб'}
        onblur="isValidateNumbert(value)"/>
        <span id="ValidNumber"></span>
        <br/>

        <label for="Product_residue" class="Divlabel"> Код товара: </label>
        <input type="text" class="Product_residue" placeholder = 'Остаток' defaultValue = { this.props.price }
        onblur="isValidateNumbert(value)"/>
        <span id="ValidNumber"></span>

        <input type='submit' value='Сохранить'/>
        <input type='submit' value='Отмена'/>
  
      </form>

    );
  }
};

export default ItemBlock;
