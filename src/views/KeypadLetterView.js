'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

class KeypadLetterView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.keypad_letter}>
          {this.props.letter}
        </Text>
      </View>
    );
  }
}

KeypadLetterView.propTypes = {
  letter: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    margin: 1,
  },
  keypad_letter: {
    color: '#89ff00',
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 22
  }
});

module.exports = KeypadLetterView;
