'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var PlaceholderView = require('./PlaceholderView');

class AnswerView extends React.Component {
  render() {
    var letters = this.props.answer.split('');
    var placeholderItems = letters.map((letter, idx) => {
      if (letter === ' ') {
        return null;
      }

      return (
        <PlaceholderView
          key={`${idx}-${letter}`}
          letter={letter}
          spaced={letters[idx-1] === ' '}
        />
      );
    });

    return (
      <View
        style={styles.container}
      >
        {placeholderItems}
      </View>
    );
  }
}

AnswerView.propTypes = {
  answer: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#181818',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center'
  }
});

module.exports = AnswerView;
