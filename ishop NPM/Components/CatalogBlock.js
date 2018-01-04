import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/CatalogBlock.css';
import InfoWindow from './InfoWindow';
import ItemBlock from './ItemBlock';



class CatalogBlock extends React.Component {

    static propTypes = {
        caption: PropTypes.string.isRequired,
        ModalWorkMode: PropTypes.number,
        selectedRowCode: PropTypes.number,
				selectedRow: PropTypes.bool,
				
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
			selectedName: '',
			selectedProductURL: '',
			selectedCount: null,
      selectedPrice: null,
			selectedResidue: null,
			catalog: this.props.catalog,
      isEditeItem: false,
		};

    rowSelected = (name, URL, code, price, residue) => {
      this.setState({
        selectedRowCode: code,
        selectedName: name,
        selectedProductURL: URL,
        selectedCount: code,
        selectedPrice: price,
        selectedResidue: residue,
        ModalWorkMode: 1,
      });
    };

		editItem = (name, URL, code, price, residue) => {
			this.setState({
        selectedRowCode: code,
        selectedName: name,
        selectedProductURL: URL,
        selectedCount: code,
        selectedPrice: price,
        selectedResidue: residue,
        ModalWorkMode: 2,
        isEditeItem: true
      });
		};

    newItem = () => {
      this.setState({
        ModalWorkMode: 2,
        selectedRowCode: null,
        selectedName: '',
        selectedProductURL: '',
        selectedCount: null,
        selectedPrice: null,
        selectedResidue: null,
        nameError: false,
        urlError: false,
        codeError: false,
        priceError: false,
        residueError: false,
        isEditeItem: false,
      });
    };

    saveItem = () => {
        if ((this.state.ModalWorkMode == 2) && this.state.isEditeItem) {
          this.state.catalog.forEach( item => {
              if ( this.state.selectedRowCode == item.code ) {
                item.name = this.state.selectedName;
                item.URL = this.state.selectedProductURL;
                item.code = this.state.selectedCount;
                item.price = this.state.selectedPrice;
                item.residue = this.state.selectedResidue;                      
              }
              
          })
        } else {
            this.state.catalog.push({
            name : this.state.selectedName,
            URL : this.state.selectedProductURL,
            code : this.state.selectedCount,
            price : this.state.selectedPrice,
            residue : this.state.selectedResidue,   
         });
        };
        this.setState({ 
          catalog: this.state.catalog, 
          ModalWorkMode: 0, 
        });
    };

		deleteRowItem = (CodeDelElem) =>{
      
			this.state.catalog.forEach((item, i) => {
        console.dir(this.state.catalog + ' - каталог 1');
				if (CodeDelElem == item.code) {
					this.state.catalog.splice(i, 1)
				};
        console.log(this.state.ModalWorkMode+ ' - deleteRowItem 0');
				this.setState({
					catalog : this.state.catalog,
					ModalWorkMode : 0,
          selectedRowCode: null,
				});
			});
		};

    exitItemInfo = () => {
        this.setState({ 
            ModalWorkMode: 0,
            selectedRowCode: null,
        });
    };

    changedFieldName = (newName) => {
      if (!newName) {
        this.setState ({ 
          nameError: true 
        })
      } else {
        this.setState ({ 
          selectedName: newName, 
          nameError: false 
        })
      };
    };

    ChangedFieldProductURL = (newURL) => {
      if (!newURL) {
        this.setState({ 
          urlError: true 
        })
      } else {
        this.setState({ 
          selectedProductURL: newURL, 
          urlError: false 
        })
      };
    };

    ChangedFieldCode = (newCode) => {
      if (!newCode) {
        this.setState({ 
          codeError: true 
        })
      } else {
        this.setState({ 
          selectedCount: newCode, 
          codeError: false 
        })
      };
    };

    ChangedFieldPrice = (newPrice) => {
      if (!newPrice) {
        this.setState({ 
          priceError: true 
        })
      } else {
        this.setState({ 
          selectedPrice: newPrice, 
          priceError: false
        })
      };
    };

    ChangedFieldResidue = (newResidue) => {
      if (!newResidue) {
        this.setState({ 
          residueError: true 
        })
      } else {
        this.setState({ 
          selectedResidue: newResidue, 
          residueError: false 
        })
      };
    };
    //enterError = () =>

    render() {

				let catalogCode = this.props.catalog.map(v => <ItemBlock key = { v.code }
          name = { v.name }
          URL = { v.URL }
          code = { v.code }
          price = { v.price }
          residue = { v.residue }
          caption = { this.props.caption }
          cbSelected = { this.rowSelected }
					selectedRow = { this.state.selectedRowCode == v.code }
          cbEditItem = { this.editItem }
          cbDeletedItem = { this.deleteRowItem }
					/>
				);
				let InfoWindowCode = <InfoWindow key = { this.state.selectedRowCode }
            WorkMode = { this.state.ModalWorkMode }
            selectedName = { this.state.selectedName }
            selectedProductURL = { this.state.selectedProductURL }
            selectedRowCode = { this.state.selectedRowCode }
            selectedPrice = { this.state.selectedPrice }
            selectedResidue = { this.state.selectedResidue }
            cbSaveItem = { this.saveItem }
            cbCloseWindowInfo = { this.exitItemInfo }
            cbChangeFieldName = { this.changedFieldName }
            cbChangeFieldProductURL = { this.ChangedFieldProductURL }
            cbChangeFieldCode = { this.ChangedFieldCode }
            cbChangeFieldPrice = { this.ChangedFieldPrice }
            cbChangeFieldResidue = { this.ChangedFieldResidue }
            />
        return ( <div className = 'CatalogBlock' >
          <div className = 'Caption' > { this.props.caption } </div>
					<div className = 'Catalog' >
					<table>
						<thead>
							<tr>
								<th> Наименование </th>
                <th> Фото </th>
                <th> Код товара </th>
                <th> Цена, руб </th>
                <th> Остаток на складе </th>
                <th></th>
                <th></th>
							</tr>
						</thead>
						<tbody>{ catalogCode }
						</tbody>
					</table>
					</div>
					<div className = 'Info_Window'>
            {InfoWindowCode}
					</div>
          <br/>
          <div className = 'NewBtn'>
            <button onClick = {this.newItem} > Добавить товар </button>
          </div>
				</div>
      );

    }
}

export default CatalogBlock;