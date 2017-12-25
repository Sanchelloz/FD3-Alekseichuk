import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/CatalogBlock.css';

//let captionText = 'Каталог товаров нашего магазина';

class CatalogBlock extends React.Component {

    static propTypes = {
        caption: React.PropTypes.string.isRequired,

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


    render() {

        var catalogCode = this.props.catalog.map(v =>
                <
                key: v.name, className: 'Product'
            },
            DOM.div({ className: 'Product_name' }, v.name),
            DOM.div({ className: 'Product_foto' },
                DOM.img({ src: v.URL }),
            ),

            DOM.div({ className: 'Product_count' }, v.code),
            DOM.div({ className: 'Product_price' }, v.price + ' руб'),
            DOM.div({ className: 'Product_residue' }, v.residue) /
            >
    );
    return React.DOM.div({ className: 'CatalogBlock' },
        React.DOM.div({ className: 'Caption' }, this.props.caption),
        React.DOM.div({ className: 'Catalog' }, catalogCode),
    );
}
};

export default CatalogBlock;