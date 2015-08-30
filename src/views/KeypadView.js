'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var KeypadLetterView = require('./KeypadLetterView');

var VOWELS = 'AEIOU'.split('');
var CONSONANTS = 'BCDFGHKLMNPQRSTVWXYZ'.split('');

var randomObject = function(arr) {
  var idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

var shuffle = function(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

class KeypadView extends React.Component {

  _fillWithRandomLetters(letters: Array) {
    while (letters.length < 14) {
      var randomLetter;

      if (letters.length % 2 === 0) {
        randomLetter = randomObject(VOWELS);
      } else {
        randomLetter = randomObject(CONSONANTS);
      }

      letters.push(randomLetter);
    }

    return letters;
  }

  render() {
    var letters = this.props.answer.split('').filter(l => l != ' ');
    letters = shuffle(this._fillWithRandomLetters(letters));

    var keyItems = letters.map((letter, idx) => {
      return (
        <KeypadLetterView
          key={`${idx}-${letter}`}
          letter={letter}
        />
      );
    });

    var mid = keyItems.length / 2;

    return (
      <View style={styles.container}>
        <View style={styles.keys}>
          <View style={styles.key_row}>
            {keyItems.slice(0, mid)}
          </View>
          <View style={styles.key_row}>
            {keyItems.slice(mid)}
          </View>
        </View>
        <View style={styles.help_container}>
          <Text style={styles.help}>
            ?
          </Text>
        </View>
      </View>
    );
  }
}

KeypadView.propTypes = {
  answer: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    alignSelf: 'stretch',
    height: 120,
    flexDirection: 'row'
  },
  keys: {
    flexDirection: 'column',
    flex: 10
  },
  key_row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  help_container: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  help: {
    color: '#89ff00',
    fontFamily: 'JotiOne-Regular',
    fontSize: 70
  }
});

module.exports = KeypadView;
