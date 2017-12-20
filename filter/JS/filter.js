var wordsBlock = React.createClass({

    displayName: 'wordsBlock',

    propTypes: {
        caption: React.PropTypes.string.isRequired,
        wordContain: React.PropTypes.string.isRequired,
        isSorted: React.PropTypes.boolean,

        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                words: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function() {
        return {
            freeWordsArr: this.props.words,
            wordContain: '',
            isSorted: false,
        };
    },

    getSorteInfo: function(EO) {
        this.setState({ isSorted: EO.target.checked }, this.processWords);
    },

    getString: function(EO) {
        var freeText = EO.target.value;
        this.setState({ wordContain: freeText + '' }, this.processWords);
    },

    processWords: function() {
        console.log(this.state.isSorted);
        var processedArr = [];

        var str = this.state.wordContain;
        if (str != null && typeof str !== undefined) {

            str = str.trim();

        };

        if (!str) {

            processedArr = this.props.words.slice();

        } else {

            for (i = 0; i < this.props.words.length; i++) {
                if ((this.props.words[i].word).indexOf(str) != -1)
                    processedArr.push(this.props.words[i])
            };
            if (processedArr.length == 0) processedArr = this.props.words;
        };

        if (this.state.isSorted) {
            processedArr.sort(function(a, b) {
                if (a.word > b.word) {
                    return 1;
                }
                if (a.word < b.word) {
                    return -1;
                }
                return 0;
            });
        };

        this.setState({ freeWordsArr: processedArr });
    },

    render: function() {

        var wordsCode = this.state.freeWordsArr.map(v =>
            React.DOM.div({ key: v.code, className: 'current_word' }, v.word, )
        );

        return React.DOM.div({ className: 'wordsBlock' },
            React.DOM.div({ className: 'Caption' }, this.props.caption),
            React.DOM.label({ className: 'WordsBlockFreeWord' },
                React.DOM.input({
                    type: 'text',
                    name: 'enterFreeWord',
                    maxLength: "15",
                    className: 'FreeWord',
                    defaultValue: '',
                    onChange: this.getString,
                }),
                React.DOM.input({
                    type: 'checkbox',
                    value: 'isSorted',
                    name: 'isSorted',
                    className: 'chkBox',
                    onChange: this.getSorteInfo,
                }),
            ),
            React.DOM.div({ className: 'Catalog' }, wordsCode),
        );
    },
});