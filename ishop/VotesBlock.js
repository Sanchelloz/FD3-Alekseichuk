var VotesBlock = React.createClass({

    displayName: 'VotesBlock',

    propTypes: {
        caption: React.PropTypes.string.isRequired,
        //answers: React.PropTypes.array.isRequired,

        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                URL: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired,
                residue: React.PropTypes.number.isRequired,
            })
        )
    },

    render: function() {

        var catalogCode = this.props.catalog.map(v =>
            React.DOM.div({ key: v.name, className: 'Product' },
                React.DOM.span({ className: 'Product_name' }, v.name),
                React.DOM.span({ className: 'Product_count' }, v.code),
                React.DOM.span({ className: 'Product_price' }, v.price + 'руб'),
                React.DOM.span({ className: 'Product_residue' }, v.residue),
                //React.DOM.img({ className: 'Product_foto' }, v.URL),
            )
        );
        return React.DOM.div({ className: 'VotesBlock' },
            React.DOM.div({ className: 'Caption' }, this.props.caption),
            React.DOM.div({ className: 'Catalog' }, catalogCode),
        );
    },
});