'use strict'
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

var Images = require('./../constants/Images');
var AnswerView = require('./../views/AnswerView');
var KeypadView = require('./../views/KeypadView');

class LevelScene extends React.Component {
  render() {
//    var level = {
//      answer: 'Super Mario',
//      image: '061'
//    };

    var level = {
      answer: 'F Zero'.toUpperCase(),
      image: '024'
    };

    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.imageContainer}
        >
          <Image
            style={styles.image}
            source={Images[level.image]}
          />
        </View>
        <AnswerView answer={level.answer} />
        <KeypadView answer={level.answer} />
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
