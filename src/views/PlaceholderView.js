'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

class PlaceholderView extends React.Component {
  render() {
    var viewStyles = [styles.container];

    if (this.props.spaced) {
      viewStyles.push(styles.spaced);
    }

    return (
      <View style={viewStyles}>
        <Text style={styles.placeholder}>
          {this.props.letter}
        </Text>
      </View>
    );
  }
}

PlaceholderView.propTypes = {
  letter: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    overflow: 'hidden',
    width: 40
  },
  spaced: {
    marginLeft: 8
  },
  placeholder: {
    color: '#89ff00',
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 22
  }
});

module.exports = PlaceholderView;
