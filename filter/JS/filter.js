var wordsBlock = React.createClass({

    displayName: 'wordsBlock',

    propTypes: {
        caption: React.PropTypes.string.isRequired,
        

        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                word: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                freeWord: React.PropTypes.array.isRequired,
                //workMode: React.PropTypes.number.isRequired,
            })
        )
    },


    getInitialState: function() {
      return {
        freeWordsArr: this.props.words,
        wordContain: 'ё',
      };
    },

    processWords: function() {
      var filterArr = [];
      for (i=0; i<this.props.words.length; i++){

        if ( this.props.words[i].indexOf(this.state.wordContain) != -1 ){

          filterArr.push(wordContain)

        };
      }; 
        
        this.setState( {freeWordsArr: filterArr} )
      
    },


    render: function() {
        var wordContain 
        var wordsCode = this.state.freeWordsArr.map(v =>
            React.DOM.div({ key: v.code, className: 'current_word' }, v.word, )
        );

            return React.DOM.div({ className: 'wordsBlock' },
                React.DOM.div({ className: 'Caption' }, this.props.caption),
                React.DOM.div({ className: 'Catalog' }, wordsCode),
            );
    },
});