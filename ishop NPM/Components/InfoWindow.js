import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/InfoWindow.css';

class InfoWindow extends React.Component {

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
    console.log(EO)
  };

  changeFieldProductURL = (EO) => {
    this.props.cbChangeFieldProductURL(EO.target.value);
    console.log(EO)
  };

  changeFieldCode = (EO) => {
    this.props.cbChangeFieldCode(EO.target.value);
    console.log(EO)
  };

  changeFieldPrice = (EO) => {
    this.props.cbChangeFieldPrice(EO.target.value);
    console.log(EO)
  };

  changeFieldResidue = (EO) => {
    this.props.cbChangeFieldResidue(EO.target.value);
    console.log(EO)
  };

  render() {

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
        <input type='text' onChange = {this.changeFieldName} className='Product_name' placeholder = 'Наименование' defaultValue = { this.props.selectedName }
        />
        <span className="ValidText"></span>
        <br/>

        <label htmlFor='Product_foto' className='editInfo'> URL-адрес фото: </label>
        <input type='text' onChange = {this.changeFieldProductURL} className='Product_foto' placeholder = 'URL ссылка на фото' defaultValue = { this.props.selectedProductURL }
        />
        <span className='ValidURL'></span>
        <br/>

        <label htmlFor='Product_count' className='editInfo'> Код товара: </label>
        <input type='number' onChange = {this.changeFieldCode} className='Product_count' placeholder = 'Код товара' defaultValue = { this.props.selectedRowCode }
        />
        <span className='ValidNumber'></span>
        <br/>

        <label htmlFor='Product_price' className='editInfo'> Цена, руб: </label>
        <input type='number' onChange = {this.changeFieldPrice} className='Product_price' placeholder = 'Цена' defaultValue = { this.props.selectedPrice }
        />
        <span className='ValidNumber'></span>
        <br/>

        <label htmlFor='Product_residue' className='editInfo'> Остаток товара на складе: </label>
        <input type='number' onChange = {this.changeFieldResidue} className='Product_residue' placeholder = 'Остаток' defaultValue = { this.props.selectedResidue }
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

export default InfoWindow;
