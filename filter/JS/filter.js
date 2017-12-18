var wordsBlock = React.createClass({

    displayName: 'wordsBlock',

    propTypes: {
        caption: React.PropTypes.string.isRequired,
        

        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                words: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                freeWord: React.PropTypes.array.isRequired,
                //workMode: React.PropTypes.number.isRequired,
                wordContain: React.PropTypes.string.isRequired,
                cbFreeWordTextChanged: React.PropTypes.string.isRequired,
                sorted: React.PropTypes.boolean,
            })
        )
    },

/*    freeWordTextChanged: function(EO) { 
       
      this.props.cbFreeWordTextChanged(EO.target.value);

    },*/

    getInitialState: function() {
      return {
        freeWordsArr: this.props.words,
        wordContain: 'е',
        sorted: false,
      };
    },

    processWords: function() {

      var filterArr = [];

      
      if (this.state.sorted) {

        this.state.wordContain.sort(function (a, b) {
          if (a.word > b.word) {
            return 1;
          }
          if (a.word < b.word) {
            return -1;
          }
            // a должно быть равным b
            return 0;
        });
      }  

      for (i=0; i<this.props.words.length; i++){

        if ( (this.props.words[i].word).indexOf(this.state.wordContain) != -1 ){

          filterArr.push(this.props.words[i])

        };
      }; 
        
        this.setState( {freeWordsArr: filterArr, sorted: true} )
     
    },



    render: function() {

      var wordsCode = this.state.freeWordsArr.map(v =>
          React.DOM.div({ key: v.code, className: 'current_word' }, v.word, )
      );

      return React.DOM.div( { className: 'wordsBlock' },
        React.DOM.div( { className: 'Caption' }, this.props.caption ),
          React.DOM.label( {className:'WordsBlockFreeWord'},
            React.DOM.input( {type:'text',name:'enterFreeWord',maxLength:"30",
              className:'FreeWord', defaultValue:'', /*onChange:this.freeWordTextChanged,*/} ),
            React.DOM.input( {type:'button', value:'Enter', className:'Btn',
              onClick:this.processWords} ),
            React.DOM.input( {type:'checkbox', value:'isSorted', name:'isSorted',
              className:'chkBox', onClick:this.processWords} ),
          ),
        React.DOM.div({ className: 'Catalog' }, wordsCode ),
      );
    },
});