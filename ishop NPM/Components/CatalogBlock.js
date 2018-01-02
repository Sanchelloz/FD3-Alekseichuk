import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/CatalogBlock.css';
import ItemBlock from './ItemBlock';
import ModalWindow from './ModalWindow';


class CatalogBlock extends React.Component {

    static propTypes = {
        caption: PropTypes.string.isRequired,
        //ModalWorkMode: PropTypes.number.isRequired,
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
				ModalWorkMode: this.props.startWorkMode,
				selectedName: '',
				selectedProductFoto: '',
				selectedCount: null,
				selectedResidue: null,

				workMode: this.props.startWorkMode,
					//products: this.props.products,
					//counter: this.props.defCounter,
					// errorName: false,
					// errorCount: false,
					// errorDescription: false,
					// errorReminder: false,
					// disableSave: false
			
    };

    rowSelected = (code) => {
        console.log('выбрана строка с кодом ' + code);
        this.setState({ selectedRowCode: code });
    };

    render() {


				var catalogCode = this.props.catalog.map(v =><ItemBlock 
					key = { v.code }
          name = { v.name }
          URL = { v.URL }
          code = { v.code }
          price = { v.price }
          residue = { v.residue }
          caption = { this.props.caption }
          cbSelected = { this.rowSelected }
					selectedRow = { this.state.selectedRowCode == v.code }
					workMode = { this.state.workMode }
          />
				);
				

/*<div>{ModalWindow}</div>*/

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
						<div><ModalWindow
						workMode = { this.state.workMode }
						key = { this.state.selectedRowCode }
						name = { this.state.selectedName }
						URL = { this.state.selectedProductFoto }
						code = { this.state.code }
						// price = { v.price }
						// residue = { v.residue }
						// caption = { this.props.caption }
						// cbSelected = { this.rowSelected }
						// selectedRow = { this.state.selectedRowCode == v.code }
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