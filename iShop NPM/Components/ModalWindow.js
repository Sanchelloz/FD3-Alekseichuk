import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ModalWindow.css';

class ModalWindow extends React.Component {

  static propTypes = {
    WorkMode: PropTypes.number, //"0" - окно закрыто,
  									//"1" - режим просмотра, "2" - режим редактирования
    catalog: PropTypes.arrayOf(					
      PropTypes.shape({
        selectedName: PropTypes.string.isRequired,
        selectedProductURL: PropTypes.string.isRequired,
        selectedRowCode: PropTypes.number.isRequired,
        selectedPrice: PropTypes.number.isRequired,
        selectedResidue: PropTypes.number.isRequired,
        workMode: PropTypes.number,
      })
    ),
  };

  render() {
    return (
    	<form>
        <label for='Product_name' class='Divlabel'> Наименование товара: </label>
        <input type='text' class='Product_name' placeholder = 'Наименование' defaultValue = { this.props.selectedName }
        />
        <span class="ValidText"></span>
        <br/>

        <label for='Product_foto' class='Divlabel'> URL-адрес фото: </label>
        <input type='text' class='Product_foto' placeholder = 'URL ссылка на фото' defaultValue = { this.props.selectedProductURL }
        />
        <span class='ValidURL'></span>
        <br/>

        <label for='Product_count' class='Divlabel'> Код товара: </label>
        <input type='text' class='Product_count' placeholder = 'Код товара' defaultValue = { this.props.selectedRowCode }
        />
        <span id='ValidNumber'></span>
        <br/>

        <label for='Product_price' class='Divlabel'> Код товара: </label>
        <input type='text' class='Product_price' placeholder = 'Цена' defaultValue = { this.props.selectedPrice + ' руб'}
        />
        <span id='ValidNumber'></span>
        <br/>

        <label for='Product_residue' class='Divlabel'> Код товара: </label>
        <input type='text' class='Product_residue' placeholder = 'Остаток' defaultValue = { this.props.selectedResidue }
        />
        <span id='ValidNumber'></span>

        <input type='submit' value='Сохранить'/>
        <input type='submit' value='Отмена'/>
  
      </form>

    );
  }
};

export default ItemBlock;
