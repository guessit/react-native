'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

class KeypadView extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>Keypad View</Text>
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
    height: 120
  }
});

module.exports = KeypadView;
