import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ItemBlock.css';

class ItemBlock extends React.Component {

    static propTypes = {
        cbSelected: PropTypes.func.isRequired,
				selectedRow: PropTypes.bool,
				
        catalog: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                URL: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                residue: PropTypes.number.isRequired,
            }),
        ),
    };

    rowClicked = (EO) => {
        this.props.cbSelected(this.props.name, this.props.URL, this.props.code,
        this.props.price, this.props.residue);

    };

    editItem = (EO) => {
        this.props.cbEditItem( this.props.name, this.props.URL, this.props.code,
        this.props.price, this.props.residue );
        EO.stopPropagation();
    };

    deleteItem = (EO) => {
        this.props.cbDeletedItem(this.props.code);
        EO.stopPropagation();
    };

    render() {

        return (
          <tr className = {(this.props.selectedRow) ? 'Product SelectedRow' : 'Product'} onClick = { this.rowClicked }>
            <td className = 'Product_name' > { this.props.name } </td>
            <td className = 'Product_foto' ><img src = { this.props.URL }/></td>
            <td className = 'Product_count' > { this.props.code } </td>
            <td className = 'Product_price'> { this.props.price } </td>
            <td className = 'Product_residue'> { this.props.residue } </td>
            <td>
              < button onClick = { this.editItem }> Редактировать </button>
            </td>
            <td>
              < button onClick = { this.deleteItem }> Удалить </button>
            </td>
          </tr>
        )
    }
};

export default ItemBlock;