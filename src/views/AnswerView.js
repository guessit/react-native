'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

class AnswerView extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>Answer View</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    alignSelf: 'stretch',
    height: 70
  }
});

module.exports = AnswerView;
