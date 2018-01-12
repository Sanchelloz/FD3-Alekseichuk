import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/InfoWindow.css';

class InfoWindow extends React.PureComponent {

  static propTypes = {
    WorkMode: PropTypes.number, //"0" - окно закрыто,
  									//"1" - режим просмотра, "2" - режим редактирования
    cbSaveItem: PropTypes.func.isRequired,
    cbCloseWindowInfo: PropTypes.func.isRequired,
    cbChangeFieldName: PropTypes.func.isRequired,
    cbChangeFieldProductURL: PropTypes.func.isRequired,
    cbChangeFieldCode: PropTypes.func.isRequired,
    cbChangeFieldPrice: PropTypes.func.isRequired,
    cbChangeFieldResidue: PropTypes.func.isRequired,
    mistakeName: PropTypes.bool, 
    mistakeURL: PropTypes.bool, 
    mistakeCode: PropTypes.bool, 
    mistakePrice: PropTypes.bool, 
    mistakeResidue: PropTypes.bool,
    isSaveBtnActive: PropTypes.bool,

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
    this.props.cbCloseWindowInfo();
  };

  changeFieldName = (EO) => {
    this.props.cbChangeFieldName(EO.target.value);
    //console.log(EO)
  };

  changeFieldProductURL = (EO) => {
    this.props.cbChangeFieldProductURL(EO.target.value);
  };

  changeFieldCode = (EO) => {
    this.props.cbChangeFieldCode(EO.target.value);
  };

  changeFieldPrice = (EO) => {
    this.props.cbChangeFieldPrice(EO.target.value);
  };

  changeFieldResidue = (EO) => {
    this.props.cbChangeFieldResidue(EO.target.value);
  };

  render() {
    let mistakeText = 'Вы не вели данные'

    if ( this.props.WorkMode == 1 ) {
    return (
      <div className='WrapInfoWindow'>
        <div className='WrapDivlabel'>
          <span className='Divlabel'> Наименование товара: </span>
          <br/>
          <span className='Divlabel'> URL-адрес фото: </span>
          <br/>
          <span className='Divlabel'> Код товара: </span>
          <br/>
          <span className='Divlabel'> Цена, руб: </span>
          <br/>
          <span className='Divlabel'> Остаток товара на складе: </span>
        </div>

        <div className='WrapProducts'>
          <span className='Divlabel'>{ this.props.selectedName }</span>
          <br/>
          <span className='Divlabel'>{ this.props.selectedProductURL }</span>
          <br/>
          <span className='Divlabel'>{ this.props.selectedRowCode }</span>
          <br/>
          <span className='Divlabel'>{ this.props.selectedPrice }</span>
          <br/>  
          <span className='Divlabel'>{ this.props.selectedResidue }</span>
        </div>

        <div className='Block_btn'>
          <input type='submit' value='Отмена' onClick = { this.closeWindow }/>
        </div>
      </div>
      )

    }  else if ( this.props.WorkMode == 2 ) {
    return (
      
      <form>
        <label htmlFor='Product_name' className='editInfo'> Наименование товара: </label>
        <input type='text' className={ ( this.props.mistakeName ) ? 'ValidText' : 'Product_input'} onChange = {this.changeFieldName}
         placeholder = { ( this.props.mistakeName ) ? 'Вы не ввели данные' : 'Наименование'} defaultValue = { this.props.selectedName } />
        <br/>

        <label htmlFor='Product_foto' className='editInfo'> URL-адрес фото: </label>
        <input type='text' className={ ( this.props.mistakeURL ) ? 'ValidText' : 'Product_input'} onChange = {this.changeFieldProductURL}
         placeholder = { ( this.props.mistakeURL ) ? 'Вы не ввели данные' : 'URL ссылка на фото'} defaultValue = { this.props.selectedProductURL } />
        <br/>

        <label htmlFor='Product_count' className='editInfo'> Код товара: </label>
        <input type='number' className={ ( this.props.mistakeCode ) ? 'ValidText' : 'Product_input'} onChange = {this.changeFieldCode}
         placeholder = { ( this.props.mistakeCode ) ? 'Вы не ввели данные' : 'Код товара'} defaultValue = { this.props.selectedRowCode } />

        <br/>

        <label htmlFor='Product_price' className='editInfo'> Цена, руб: </label>
        <input type='number' className={ ( this.props.mistakePrice ) ? 'ValidText' : 'Product_input'} onChange = {this.changeFieldPrice}
         placeholder = { ( this.props.mistakePrice ) ? 'Вы не ввели данные' : 'Цена'} defaultValue = { this.props.selectedPrice } />
        <br/>

        <label htmlFor='Product_residue' className='editInfo'> Остаток товара на складе: </label>
        <input type='number' className={ ( this.props.mistakeResidue ) ? 'ValidText' : 'Product_input'} onChange = {this.changeFieldResidue}
         placeholder = { ( this.props.mistakeResidue ) ? 'Вы не ввели данные' : 'Остаток'} defaultValue = { this.props.selectedResidue } />
        <br/>
        <div className='Block_btn'>
          <input type='submit' value='Сохранить' disabled = { this.props.isSaveBtnActive } onClick = { this.saveItem }/>
          <input type='submit' value='Отмена' onClick = { this.closeWindow }/>
        </div>
      </form>

      ) } else return (
      <form>
      </form>
      )
  }
};

export default InfoWindow;
