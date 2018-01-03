import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/CatalogBlock.css';
import ModalWindow from './ModalWindow';
import ItemBlock from './ItemBlock';



class CatalogBlock extends React.Component {

    static propTypes = {
        caption: PropTypes.string.isRequired,
        ModalWorkMode: PropTypes.number.isRequired,
        selectedRowCode: PropTypes.number,
				selectedRow: PropTypes.bool,
				startWorkMode: PropTypes.number.isRequired,
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
			selectedResidue: null,
      selectedPrice: null,
			selectedResidue: null,
			
    };

    rowSelected = (code) => {
        console.log('выбрана строка с кодом ' + code);
        this.setState({ selectedRowCode: code });
        this.setState({ ModalWorkMode: 1 });
    };
//workMode = { this.state.workMode }
    render() {


				var catalogCode = this.props.catalog.map(v => <ItemBlock key = { v.code }
          name = { v.name }
          URL = { v.URL }
          code = { v.code }
          price = { v.price }
          residue = { v.residue }
          caption = { this.props.caption }
          cbSelected = { this.rowSelected }
					selectedRow = { this.state.selectedRowCode == v.code }
					/>
				);
				

      /* cbSelected = { this.rowSelected }
        selectedRow = { this.state.selectedRowCode == v.code } */
        return ( <div className = 'CatalogBlock' >
          <div className = 'Caption' > { this.props.caption } </div>
					<div className = 'Catalog' >
					<table>
						<thead>
							<tr>
								<th> Наименование </th><th> Фото </th><th> Код товара </th><th> Цена, руб </th><th> Остаток на складе </th><th></th><th></th>
							</tr>
						</thead>
						<tbody>{ catalogCode }
						</tbody>
					</table>
						</div>
						<div><ModalWindow key = { this.state.selectedRowCode }
						workMode = { this.state.ModalWorkMode }
						selectedName = { this.state.selectedName }
						selectedProductURL = { this.state.selectedProductFoto }
						selectedRowCode = { this.state.selectedRowCode }
						selectedPrice = { this.state.selectedPrice }
						selectedResidue = { this.state.selectedResidue }

						/>
						</div>
						<div className = 'NewBtn'>
							<button> Добавить товар </button>
						</div>
					</div>
        );

    }
}

export default CatalogBlock;