'use strict'
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

var AnswerView = require('./../views/AnswerView');
var KeypadView = require('./../views/KeypadView');

class LevelScene extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.imageContainer}
        >
          <Image
            style={styles.image}
            source={require('image!061')}
          />
        </View>
        <AnswerView />
        <KeypadView />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 64
  }
});

module.exports = LevelScene;
