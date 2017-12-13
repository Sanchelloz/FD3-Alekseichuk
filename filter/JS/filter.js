var wordsBlock = React.createClass({

    displayName: 'wordsBlock',

    propTypes: {
        caption: React.PropTypes.string.isRequired,
        //answers: React.PropTypes.array.isRequired,

        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                word: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        )
    },
    render: function() {

        var wordsCode = this.props.words.map(v =>
            React.DOM.div({ key: v.code, className: 'current_word' }, v.word, )
        );

        var filterBlock =

            return React.DOM.div({ className: 'wordsBlock' },
                React.DOM.div({ className: 'Caption' }, this.props.caption),
                React.DOM.div({ className: 'Catalog' }, wordsCode),
            );
    },
});