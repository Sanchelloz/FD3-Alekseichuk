import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ModalWindow.css';

class ModalWindow extends React.Component {

  static propTypes = {
    WorkMode: PropTypes.number, //"0" - окно закрыто,
  									//"1" - режим просмотра, "2" - режим редактирования
    cbSaveItem: PropTypes.func.isRequired,
    cbCloseWindow: PropTypes.func.isRequired,
    catalog: PropTypes.arrayOf(					
      PropTypes.shape({
        selectedName: PropTypes.string.isRequired,
        selectedProductURL: PropTypes.string.isRequired,
        selectedRowCode: PropTypes.number.isRequired,
        selectedPrice: PropTypes.number.isRequired,
        selectedResidue: PropTypes.number.isRequired,
        
      })
    ),
  };

  saveItem = (EO) => {
      this.props.cbSaveItem();
  };

  closeWindow = (EO) => {
      this.props.cbCloseWindow();
  };

  render() {

    if ( this.props.WorkMode == 0 ) {
    return (
      
    	<form>
        <label htmlFor='Product_name' className='Divlabel'> Наименование товара: </label>
        <input type='text' className='Product_name' readOnly value = { this.props.selectedName }
        />
        <span className="ValidText">Данные не верны</span>
        <br/>

        <label htmlFor='Product_foto' className='Divlabel'> URL-адрес фото: </label>
        <input type='text' className='Product_foto' readOnly value = { this.props.selectedProductURL }
        />
        <span className='ValidURL'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_count' className='Divlabel'> Код товара: </label>
        <input type='text' className='Product_count' readOnly value = { this.props.selectedRowCode }
        />
        <span className='ValidNumber'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_price' className='Divlabel'> Код товара: </label>
        <input type='text' className='Product_price' readOnly value = { this.props.selectedPrice + ' руб'}
        />
        <span className='ValidNumber'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_residue' className='Divlabel'> Остаток товара на складе: </label>
        <input type='text' className='Product_residue' readOnly value = { this.props.selectedResidue }
        />
        <span className='ValidNumber'></span>

      </form>

      )

    }  else if ( this.props.WorkMode == 2 ) {
    return (
      
      <form>
        <label htmlFor='Product_name' className='Divlabel'> Наименование товара: </label>
        <input type='text' className='Product_name' placeholder = 'Наименование' defaultValue = { this.props.selectedName }
        />
        <span className="ValidText">Данные не верны</span>
        <br/>

        <label htmlFor='Product_foto' className='Divlabel'> URL-адрес фото: </label>
        <input type='text' className='Product_foto' placeholder = 'URL ссылка на фото' defaultValue = { this.props.selectedProductURL }
        />
        <span className='ValidURL'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_count' className='Divlabel'> Код товара: </label>
        <input type='text' className='Product_count' placeholder = 'Код товара' defaultValue = { this.props.selectedRowCode }
        />
        <span className='ValidNumber'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_price' className='Divlabel'> Код товара: </label>
        <input type='text' className='Product_price' placeholder = 'Цена' defaultValue = { this.props.selectedPrice + ' руб'}
        />
        <span className='ValidNumber'>Данные не верны</span>
        <br/>

        <label htmlFor='Product_residue' className='Divlabel'> Остаток товара на складе: </label>
        <input type='text' className='Product_residue' readOnly placeholder = 'Остаток' value = { this.props.selectedResidue }
        />
        <span className='ValidNumber'></span>
        <br/>
        <div className='Block_btn'>
          <input type='submit' value='Сохранить' onClick = { this.saveItem }/>
          <input type='submit' value='Отмена' onClick = { this.closeWindow }/>
        </div>
      </form>

      ) } else return (
      <form>
      </form>
      )
  }
};

export default ModalWindow;
