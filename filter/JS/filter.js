var filter = React.createClass({

    displayName: 'filterText',

    listFilter: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            content: React.PropTypes.string.isRequired,
            code: React.PropTypes.number.isRequired,
        })
    )
},


render: function() {

    var catalogCode = this.props.catalog.map(v =>
        React.DOM.div({ key: v.name, className: 'Product' },
            React.DOM.div({ className: 'Product_name' }, v.name),
            React.DOM.div({ className: 'Product_foto' },
                React.DOM.img({ src: v.URL }),
            ),

            React.DOM.div({ className: 'Product_count' }, v.code),
            React.DOM.div({ className: 'Product_price' }, v.price + ' руб'),
            React.DOM.div({ className: 'Product_residue' }, v.residue),

        )
    );
    return React.DOM.div({ className: 'CatalogBlock' },
        React.DOM.div({ className: 'Caption' }, this.props.caption),
        React.DOM.div({ className: 'Catalog' }, catalogCode),
    );
},
});